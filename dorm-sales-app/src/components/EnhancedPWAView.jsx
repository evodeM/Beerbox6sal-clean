import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { db } from '../firebase/config';
import { 
  doc, 
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
  where
} from 'firebase/firestore';
import RefreshIcon from '@mui/icons-material/Refresh';

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#f5f6fa',
  overflowX: 'hidden',
  position: 'relative'
}));

const Header = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '48px 16px 24px 16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '0 0 24px 24px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  marginBottom: '24px'
}));

const EnhancedPWAView = () => {
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState(localStorage.getItem('selectedRoom') || '601');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Generate room numbers 601-628
  const roomNumbers = Array.from({ length: 28 }, (_, i) => String(601 + i));

  const handleRoomSelect = (event) => {
    const newRoomId = event.target.value;
    setRoomId(newRoomId);
    localStorage.setItem('selectedRoom', newRoomId);
  };

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

  useEffect(() => {
    let unsubscribe = null;

    const setupRealTimeListener = async () => {
      if (!roomId) return;

      try {
        setLoading(true);
        console.log('Setting up listener for room:', roomId);

        // Set up real-time listener for room data
        const roomRef = doc(db, 'rooms', roomId);
        unsubscribe = onSnapshot(roomRef, async (roomDoc) => {
          if (roomDoc.exists()) {
            const roomData = { id: roomDoc.id, ...roomDoc.data() };
            console.log('Room data received:', roomData);

            // Get recent purchases
            const purchasesRef = collection(db, 'purchases');
            const purchasesQuery = query(
              purchasesRef,
              where('roomId', '==', roomId),
              orderBy('timestamp', 'desc'),
              limit(10)
            );

            const purchasesSnapshot = await getDocs(purchasesQuery);
            const recentPurchases = purchasesSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            console.log('Recent purchases:', recentPurchases);

            setRoom({
              ...roomData,
              recentPurchases
            });
          } else {
            console.log('Room not found:', roomId);
            setError('Værelse ikke fundet');
          }
          setLoading(false);
        }, (error) => {
          console.error('Error in room listener:', error);
          setError('Der opstod en fejl ved indlæsning af data');
          setLoading(false);
        });

      } catch (error) {
        console.error('Error setting up listener:', error);
        setError('Der opstod en fejl ved indlæsning af data');
        setLoading(false);
      }
    };

    setupRealTimeListener();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [roomId]);

  const handleRefresh = () => {
    setLoading(true);
    // The real-time listener will automatically refresh the data
    setTimeout(() => setLoading(false), 1000);
  };

  if (loading) {
    return (
      <StyledContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      </StyledContainer>
    );
  }

  if (error) {
    return (
      <StyledContainer>
        <Typography color="error">{error}</Typography>
        <Button onClick={() => window.location.reload()}>
          Prøv igen
        </Button>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Header>
        <Box sx={{ position: 'absolute', right: '16px', top: '16px' }}>
          <IconButton onClick={handleRefresh}>
            <RefreshIcon />
          </IconButton>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Køb i alt
          </Typography>
          <Typography variant="h4" component="div" sx={{ color: '#2196f3' }}>
            {room?.balance ? `${room.balance} kr` : '0 kr'}
          </Typography>
        </Box>
      </Header>

      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <TextField
          select
          fullWidth
          label="Vælg værelse"
          value={roomId}
          onChange={handleRoomSelect}
          SelectProps={{
            native: true,
          }}
          sx={{ mb: 3 }}
        >
          {roomNumbers.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </TextField>

        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Seneste køb
          </Typography>
          {room?.recentPurchases?.length > 0 ? (
            room.recentPurchases.map((purchase) => (
              <Box key={purchase.id} sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {formatTimestamp(purchase.timestamp)} - {purchase.amount} kr
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              Ingen køb endnu
            </Typography>
          )}
        </Paper>
      </Container>
    </StyledContainer>
  );
};

export default EnhancedPWAView;
