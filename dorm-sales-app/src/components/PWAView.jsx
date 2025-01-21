import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  CircularProgress
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

const StyledContainer = styled(Container)({
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  color: '#333333',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '24px'
});

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid #e0e0e0'
});

const OccupantInput = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#333333',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    padding: '8px 12px'
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none'
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none'
  }
});

const PayButton = styled(Button)({
  backgroundColor: '#5BB9FD',
  color: 'white',
  padding: '16px',
  borderRadius: '8px',
  fontSize: '16px',
  textTransform: 'none',
  marginTop: '40px',
  marginBottom: '40px',
  '&:hover': {
    backgroundColor: '#4999d6'
  }
});

const Section = styled(Paper)({
  backgroundColor: '#f5f5f5',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '16px',
  boxShadow: 'none',
  border: '1px solid #e0e0e0'
});

const SectionTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 500,
  marginBottom: '12px',
  color: '#333333'
});

const PWAView = () => {
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState(localStorage.getItem('selectedRoom') || '601');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
    return date.toLocaleString('da-DK', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit'
    });
  };

  useEffect(() => {
    let unsubscribe = null;

    const setupRealTimeListener = async () => {
      if (!roomId) return;

      try {
        setLoading(true);
        console.log('Setting up listener for room:', roomId);

        const roomRef = doc(db, 'rooms', roomId);
        unsubscribe = onSnapshot(roomRef, async (roomDoc) => {
          if (roomDoc.exists()) {
            const roomData = { id: roomDoc.id, ...roomDoc.data() };
            console.log('Room data received:', roomData);

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

  const handleRoomSelect = (event) => {
    const newRoomId = event.target.value;
    setRoomId(newRoomId);
    localStorage.setItem('selectedRoom', newRoomId);
  };

  const handleMobilePayClick = async () => {
    const adminConfigRef = doc(db, 'adminConfig', 'general');
    const configDoc = await getDoc(adminConfigRef);
    
    if (configDoc.exists()) {
      const { mobilePayPhoneNumber } = configDoc.data();
      const amount = room?.balance || 0;
      window.location.href = `mobilepay://send?phone=${mobilePayPhoneNumber}&amount=${amount}&comment=Værelse ${roomId}`;
    }
  };

  const roomNumbers = Array.from({ length: 28 }, (_, i) => String(601 + i));

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
        <Typography variant="h6">
          Værelse {roomId}
        </Typography>
        <OccupantInput
          variant="standard"
          placeholder="Beboernavn"
          value={room?.occupantName || ''}
          disabled
        />
        <TextField
          select
          value={roomId}
          onChange={handleRoomSelect}
          variant="standard"
          SelectProps={{
            native: true
          }}
        >
          {roomNumbers.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </TextField>
      </Header>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="body1" sx={{ mb: 1, color: '#666666' }}>Samlet saldo:</Typography>
        <Typography variant="h4" sx={{ color: '#333333' }}>{room?.balance?.toFixed(2) || '0.00'} kr</Typography>
      </Box>

      <PayButton
        fullWidth
        variant="contained"
        onClick={handleMobilePayClick}
        disabled={!room?.balance}
      >
        Betal med MobilePay
      </PayButton>

      <Section>
        <SectionTitle>Seneste 5 køb</SectionTitle>
        {room?.recentPurchases?.length > 0 ? (
          room.recentPurchases.map((purchase) => (
            <Box key={purchase.id} sx={{ mb: 2, pb: 2, borderBottom: '1px solid #e0e0e0' }}>
              <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between', color: '#333333' }}>
                <span>Produkt: {purchase.productName}</span>
                <span>Pris: {purchase.amount} kr</span>
              </Typography>
              {purchase.timestamp && (
                <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#666666' }}>
                  {formatTimestamp(purchase.timestamp)}
                </Typography>
              )}
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: '#666666' }}>
            Ingen køb endnu
          </Typography>
        )}
      </Section>

      <Section>
        <SectionTitle>Påmindelser</SectionTitle>
        <Typography variant="body2" sx={{ color: '#333333' }}>
          Husk køkkenmøde - Torsdag d. 15. juni
        </Typography>
      </Section>
    </StyledContainer>
  );
};

export default PWAView;
