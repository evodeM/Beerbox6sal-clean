import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { db } from '../firebase/config';
import { 
  doc, 
  getDoc, 
  onSnapshot, 
  collection, 
  query, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { getRoom } from '../firebase/services';

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
  const [roomId, setRoomId] = useState(localStorage.getItem('selectedRoom'));
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [error, setError] = useState(null);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
    return date.toLocaleString('da-DK', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    if (!roomId) return;

    let unsubscribePurchases;
    const roomRef = doc(db, 'rooms', roomId);
    const purchasesRef = collection(db, 'rooms', roomId, 'purchases');

    // Room data listener
    const unsubscribeRoom = onSnapshot(roomRef, async (doc) => {
      if (doc.exists()) {
        const roomData = doc.data();
        console.log('Room data updated:', roomData);
        
        // Fetch the latest purchases
        const purchasesQuery = query(purchasesRef, orderBy('timestamp', 'desc'), limit(5));
        
        unsubscribePurchases = onSnapshot(purchasesQuery, (snapshot) => {
          const purchases = [];
          snapshot.forEach((doc) => {
            const purchaseData = doc.data();
            purchases.push({ 
              id: doc.id, 
              ...purchaseData,
              timestamp: purchaseData.timestamp
            });
          });
          
          console.log('Fetched purchases:', purchases);
          setRecentPurchases(purchases);
        }, (error) => {
          console.error('Error fetching purchases:', error);
          setError(error);
        });

        setRoom(roomData);
      }
    }, (error) => {
      console.error('Error listening to room data:', error);
      setError(error);
    });

    return () => {
      unsubscribeRoom();
      if (unsubscribePurchases) unsubscribePurchases();
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

  // Generate room numbers 601-628
  const roomNumbers = Array.from({ length: 28 }, (_, i) => String(601 + i));

  if (!roomId) {
    return (
      <StyledContainer>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Velkommen
          </Typography>
          <Typography gutterBottom sx={{ mb: 3, color: '#666666' }}>
            Vælg dit værelse for at fortsætte
          </Typography>
          <TextField
            select
            fullWidth
            label="Værelse"
            onChange={handleRoomSelect}
            SelectProps={{
              native: true
            }}
            sx={{ 
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              '& .MuiInputBase-input': { color: '#333333' },
              '& .MuiInputLabel-root': { color: '#666666' }
            }}
          >
            <option value="">Vælg værelse</option>
            {roomNumbers.map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </TextField>
        </Box>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Header>
        <Typography variant="h6" sx={{ color: '#333333' }}>Værelse {roomId}</Typography>
        <OccupantInput
          variant="standard"
          placeholder="Beboernavn"
          value={room?.occupantName || ''}
          disabled
        />
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
        {error && (
          <Typography variant="body2" color="error">
            Fejl ved hentning af køb: {error.message}
          </Typography>
        )}
        {recentPurchases.length > 0 ? (
          recentPurchases.map((purchase) => (
            <Box key={purchase.id} sx={{ 
              mb: 2, 
              pb: 2, 
              borderBottom: '1px solid #e0e0e0',
              '&:last-child': { borderBottom: 'none' }
            }}>
              <Typography variant="body2" sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                color: '#333333'
              }}>
                <span>Produkt: {purchase.productName}</span>
                <span>Pris: {purchase.amount} kr</span>
              </Typography>
              {purchase.timestamp && (
                <Typography variant="caption" sx={{ 
                  display: 'block', 
                  mt: 0.5, 
                  color: '#666666' 
                }}>
                  {formatTimestamp(purchase.timestamp)}
                </Typography>
              )}
            </Box>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: '#666666' }}>
            Ingen seneste køb
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
