import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { collection, query, orderBy, limit, getDocs, getDoc, doc, where, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RefreshIcon from '@mui/icons-material/Refresh';
import PaidIcon from '@mui/icons-material/Paid';

const RecentPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [todayStats, setTodayStats] = useState({ total: 0, count: 0 });

  const loadTodayStats = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const purchasesRef = collection(db, 'purchases');
      const q = query(
        purchasesRef,
        where('timestamp', '>=', Timestamp.fromDate(today))
      );
      
      const querySnapshot = await getDocs(q);
      let total = 0;
      let count = 0;
      
      querySnapshot.forEach((doc) => {
        const purchase = doc.data();
        total += purchase.amount;
        count++;
      });
      
      setTodayStats({ total, count });
    } catch (err) {
      console.error('Error loading today stats:', err);
    }
  };

  const loadRecentPurchases = useCallback(async (isRefreshing = false) => {
    try {
      if (!isRefreshing) {
        setLoading(true);
      }
      setError('');
      
      // Load both recent purchases and today's stats
      await Promise.all([
        (async () => {
          const purchasesRef = collection(db, 'purchases');
          const q = query(
            purchasesRef,
            orderBy('timestamp', 'desc'),
            limit(5)
          );

          const querySnapshot = await getDocs(q);
          const purchasesData = await Promise.all(
            querySnapshot.docs.map(async (purchaseDoc) => {
              const purchaseData = purchaseDoc.data();
              const roomRef = doc(db, 'rooms', purchaseData.roomId);
              const roomSnap = await getDoc(roomRef);
              const roomData = roomSnap.data() || {};

              return {
                id: purchaseDoc.id,
                ...purchaseData,
                occupantName: roomData.occupantName || 'Ukendt beboer',
                timestamp: purchaseData.timestamp?.toDate() || new Date()
              };
            })
          );
          setPurchases(purchasesData);
        })(),
        loadTodayStats()
      ]);

      setError('');
    } catch (err) {
      console.error('Error loading recent purchases:', err);
      setError('Kunne ikke indlæse seneste køb');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadRecentPurchases();
  }, [loadRecentPurchases]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadRecentPurchases(true);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Paper sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">
          Seneste Aktivitet
        </Typography>
        <Tooltip title="Opdater liste">
          <IconButton 
            onClick={handleRefresh} 
            disabled={refreshing}
            sx={{ 
              animation: refreshing ? 'spin 1s linear infinite' : 'none',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Card sx={{ mb: 3, bgcolor: '#f8fafc' }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: '#4CAF50', width: 56, height: 56 }}>
                <PaidIcon sx={{ fontSize: 32 }} />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" gutterBottom>
                Dagens Salg
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date().toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="div" sx={{ color: '#2E7D32' }}>
                {todayStats.total} kr
              </Typography>
              <Typography variant="body2" color="text.secondary" align="right">
                {todayStats.count} køb i dag
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="subtitle1" gutterBottom sx={{ mb: 2 }}>
        Seneste 5 Køb
      </Typography>

      {purchases.length === 0 ? (
        <Typography color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
          Ingen køb at vise
        </Typography>
      ) : (
        <List>
          {purchases.map((purchase, index) => (
            <React.Fragment key={purchase.id}>
              {index > 0 && <Divider variant="inset" component="li" />}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: '#5A78FF' }}>
                    <ShoppingBagIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Værelse {purchase.roomId} - {purchase.occupantName}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {purchase.productName} - {purchase.amount} kr
                      </Typography>
                      {" — "}
                      {new Date(purchase.timestamp).toLocaleString('da-DK', {
                        weekday: 'long',
                        hour: '2-digit',
                        minute: '2-digit',
                        day: 'numeric',
                        month: 'long'
                      })}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default RecentPurchases;
