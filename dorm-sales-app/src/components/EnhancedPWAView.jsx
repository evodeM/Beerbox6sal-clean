import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  SwipeableDrawer,
  CircularProgress,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { db } from '../firebase/config';
import { 
  doc, 
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore';
import { getRoom } from '../firebase/services';
import RefreshIcon from '@mui/icons-material/Refresh';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryIcon from '@mui/icons-material/History';
import CloseIcon from '@mui/icons-material/Close';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  color: '#333333',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '24px',
  '@media (max-width: 600px)': {
    padding: '12px',
    gap: '16px',
  },
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid #e0e0e0',
  position: 'sticky',
  top: 0,
  backgroundColor: '#ffffff',
  zIndex: 1000,
}));

const BalanceCard = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#f8f9fa',
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:active': {
    transform: 'scale(0.98)',
  },
}));

const PurchaseHistoryItem = styled(Paper)(({ theme }) => ({
  padding: '12px',
  marginBottom: '8px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}));

const RefreshButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '16px',
  top: '16px',
  backgroundColor: 'rgba(255,255,255,0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,1)',
  },
}));

const EnhancedPWAView = () => {
  const [room, setRoom] = useState({ 
    occupantName: '', 
    balance: 0,
    lastPurchase: null,
    recentPurchases: []
  });
  const [roomId, setRoomId] = useState(localStorage.getItem('selectedRoom'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [historyDrawerOpen, setHistoryDrawerOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
    return date.toLocaleString('da-DK', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
    });
  };

  const loadData = useCallback(async (showRefreshIndicator = false) => {
    if (!roomId) return;

    try {
      if (showRefreshIndicator) setIsRefreshing(true);
      console.log('Loading data for room:', roomId);

      const roomData = await getRoom(roomId);
      console.log('Room data loaded:', roomData);

      const purchasesRef = collection(db, 'rooms', roomId, 'purchases');
      const purchasesQuery = query(purchasesRef, orderBy('timestamp', 'desc'), limit(5));
      
      const snapshot = await getDocs(purchasesQuery);
      const recentPurchases = [];
      
      snapshot.forEach((doc) => {
        const purchaseData = doc.data();
        recentPurchases.push({ 
          id: doc.id, 
          ...purchaseData,
          timestamp: purchaseData.timestamp
        });
      });

      const updatedRoomData = {
        ...roomData,
        recentPurchases
      };

      setRoom(updatedRoomData);
      if (showRefreshIndicator) {
        setNotification({ open: true, message: 'Data refreshed successfully', severity: 'success' });
      }
    } catch (error) {
      console.error('Error loading data:', error);
      setError(error);
      setNotification({ open: true, message: 'Error refreshing data', severity: 'error' });
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [roomId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRefresh = async () => {
    await loadData(true);
  };

  const handlePullToRefresh = async (event) => {
    const touchStart = event.touches[0].clientY;
    
    const handleTouchMove = (e) => {
      const touchEnd = e.touches[0].clientY;
      if (touchEnd - touchStart > 100 && window.scrollY === 0) {
        handleRefresh();
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleTouchMove);
    }, { once: true });
  };

  if (loading && !isRefreshing) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">Error loading data. Please try again.</Typography>
      </Box>
    );
  }

  return (
    <StyledContainer onTouchStart={handlePullToRefresh}>
      <Header>
        <Typography variant="h6">Room {roomId}</Typography>
        <RefreshButton 
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <RefreshIcon />
        </RefreshButton>
      </Header>

      <BalanceCard>
        <AccountBalanceWalletIcon sx={{ fontSize: 40, color: '#1976d2' }} />
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          {room.balance.toFixed(2)} kr
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Current Balance
        </Typography>
      </BalanceCard>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          startIcon={<HistoryIcon />}
          onClick={() => setHistoryDrawerOpen(true)}
          fullWidth
        >
          View Purchase History
        </Button>
      </Box>

      <SwipeableDrawer
        anchor="bottom"
        open={historyDrawerOpen}
        onClose={() => setHistoryDrawerOpen(false)}
        onOpen={() => setHistoryDrawerOpen(true)}
        swipeAreaWidth={56}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            p: 2,
            height: '80vh',
            overflow: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Purchase History</Typography>
            <IconButton onClick={() => setHistoryDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {room.recentPurchases.map((purchase) => (
            <PurchaseHistoryItem key={purchase.id}>
              <Box>
                <Typography variant="subtitle1">{purchase.productName}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatTimestamp(purchase.timestamp)}
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="primary">
                {purchase.amount.toFixed(2)} kr
              </Typography>
            </PurchaseHistoryItem>
          ))}
        </Box>
      </SwipeableDrawer>

      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert 
          onClose={() => setNotification({ ...notification, open: false })} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default EnhancedPWAView;
