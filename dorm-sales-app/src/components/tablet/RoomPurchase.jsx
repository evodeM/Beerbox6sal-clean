import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Grid,
  IconButton,
  Container,
  Divider
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getRoom, updateRoom, addPurchase, getProducts } from '../../firebase/services';

const RoomPurchase = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({ occupantName: '', balance: 0 });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [roomData, productsData] = await Promise.all([
          getRoom(roomId),
          getProducts()
        ]);
        setRoom(roomData || { occupantName: '', balance: 0 });
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [roomId]);

  const handleOccupantNameChange = async (newName) => {
    try {
      await updateRoom(roomId, { occupantName: newName });
      setRoom(prev => ({ ...prev, occupantName: newName }));
    } catch (error) {
      console.error('Error updating occupant name:', error);
    }
  };

  const handlePurchase = async (productName) => {
    try {
      const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
      if (!product) {
        console.error('Product not found:', productName);
        return;
      }

      await addPurchase({
        roomId,
        productName: product.name,
        amount: product.price,
      });

      const updatedRoom = await getRoom(roomId);
      setRoom(updatedRoom);
    } catch (error) {
      console.error('Error making purchase:', error);
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleString('da-DK', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box 
      sx={{ 
        bgcolor: '#1a1a1a', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Container maxWidth="sm" sx={{ py: 4, flex: 1 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          mb: 6
        }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              color: 'white',
              fontWeight: 'bold',
              mb: 2
            }}
          >
            {roomId}
          </Typography>
          <TextField
            variant="standard"
            placeholder="Beboer navn"
            value={room.occupantName}
            onChange={(e) => handleOccupantNameChange(e.target.value)}
            sx={{
              width: '100%',
              maxWidth: 300,
              '& .MuiInput-root': {
                color: 'white',
                fontSize: '1.5rem',
                textAlign: 'center',
                '&:before': {
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                '&:hover:not(.Mui-disabled):before': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
                '&.Mui-focused:after': {
                  borderColor: '#e74c3c',
                },
              },
              '& .MuiInput-input': {
                textAlign: 'center',
              }
            }}
          />
        </Box>

        {/* Balance */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              mb: 1
            }}
          >
            SALDO
          </Typography>
          <Typography 
            variant="h2"
            sx={{ 
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {room.balance?.toFixed(2)} kr
          </Typography>
        </Box>

        {/* Last Purchase */}
        {room.lastPurchase && (
          <Paper 
            elevation={0}
            sx={{ 
              bgcolor: 'rgba(255,255,255,0.05)',
              p: 3,
              mb: 6,
              borderRadius: 3,
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                display: 'block',
                mb: 2
              }}
            >
              SIDSTE KØB
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {room.lastPurchase.productName}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {room.lastPurchase.amount?.toFixed(2)} kr
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {formatTimestamp(room.lastPurchase.timestamp)}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* Purchase Buttons */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {['Beer', 'Soda', 'Snacks', 'Water'].map((product) => (
            <Grid item xs={6} key={product}>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={() => handlePurchase(product.toLowerCase())}
                sx={{ 
                  bgcolor: '#e74c3c',
                  py: 3,
                  borderRadius: 3,
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: '#c0392b'
                  }
                }}
              >
                {product}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Back Button */}
      <Box sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.3)' }}>
        <Container maxWidth="sm">
          <Button
            fullWidth
            variant="text"
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIcon />}
            sx={{ 
              color: 'white',
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Tilbage til oversigt
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default RoomPurchase;
