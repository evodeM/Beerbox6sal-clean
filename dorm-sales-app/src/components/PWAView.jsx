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
import { doc, getDoc, onSnapshot, collection, query, orderBy, limit } from 'firebase/firestore';

const StyledContainer = styled(Container)({
  minHeight: '100vh',
  backgroundColor: '#1a1a1a',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '24px'
});

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0'
});

const OccupantInput = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#9e9e9e',
    backgroundColor: '#333333',
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
  backgroundColor: '#2a2a2a',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '16px'
});

const SectionTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 500,
  marginBottom: '12px'
});

const PWAView = () => {
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState(localStorage.getItem('selectedRoom'));
  const [recentPurchases, setRecentPurchases] = useState([]);

  useEffect(() => {
    if (!roomId) return;

    // Listen for room data changes
    const roomRef = doc(db, 'rooms', roomId);
    const unsubscribe = onSnapshot(roomRef, (doc) => {
      if (doc.exists()) {
        setRoom(doc.data());
      }
    });

    // Get recent purchases
    const purchasesRef = collection(db, 'rooms', roomId, 'purchases');
    const purchasesQuery = query(purchasesRef, orderBy('timestamp', 'desc'), limit(5));
    const purchasesUnsubscribe = onSnapshot(purchasesQuery, (snapshot) => {
      const purchases = [];
      snapshot.forEach((doc) => {
        purchases.push({ id: doc.id, ...doc.data() });
      });
      setRecentPurchases(purchases);
    });

    return () => {
      unsubscribe();
      purchasesUnsubscribe();
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
      window.location.href = `mobilepay://send?phone=${mobilePayPhoneNumber}&amount=${amount}&comment=Room ${roomId}`;
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
          <Typography gutterBottom sx={{ mb: 3 }}>
            Vælg dit værelse
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
              backgroundColor: '#ffffff1a',
              borderRadius: '8px',
              '& .MuiInputBase-input': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' }
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
        <Typography variant="h6">Room {roomId}</Typography>
        <OccupantInput
          variant="standard"
          placeholder="Occupant Name"
          value={room?.occupantName || ''}
          disabled
        />
      </Header>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Total Balance Owed:</Typography>
        <Typography variant="h4">${room?.balance?.toFixed(2) || '0.00'}</Typography>
      </Box>

      <PayButton
        fullWidth
        variant="contained"
        onClick={handleMobilePayClick}
        disabled={!room?.balance}
      >
        Pay with Mobilepay
      </PayButton>

      <Section>
        <SectionTitle>Recent purchases</SectionTitle>
        {recentPurchases.map((purchase) => (
          <Box key={purchase.id} sx={{ mb: 1 }}>
            <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Product: {purchase.productName}</span>
              <span>Price: ${purchase.amount}</span>
            </Typography>
            {purchase.timestamp && (
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                Timestamp: {new Date(purchase.timestamp.toDate()).toLocaleString()}
              </Typography>
            )}
          </Box>
        ))}
      </Section>

      <Section>
        <SectionTitle>Påmindelser for alle beboere</SectionTitle>
        <Typography variant="body2">
          Husk køkkenmøde - Tors d. 15/juni
        </Typography>
      </Section>
    </StyledContainer>
  );
};

export default PWAView;
