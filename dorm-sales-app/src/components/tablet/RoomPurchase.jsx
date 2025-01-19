import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Grid,
  Container
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { getRoom, updateRoom, addPurchase, getProducts, initializeDefaultData } from '../../firebase/services';

const DEFAULT_PRODUCTS = [
  { id: 'beer', name: 'Øl', price: 7 },
  { id: 'soda', name: 'Sodavand', price: 5 },
  { id: 'snacks', name: 'Snacks', price: 10 },
  { id: 'water', name: 'Vand', price: 3 }
];

const RoomPurchase = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({ occupantName: '', balance: 0 });
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Initialize default products if needed
        await initializeDefaultData();
        
        const [roomData, productsData] = await Promise.all([
          getRoom(roomId),
          getProducts()
        ]);
        
        setRoom(roomData || { occupantName: '', balance: 0 });
        setProducts(productsData.length > 0 ? productsData : DEFAULT_PRODUCTS);
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to default products on error
        setProducts(DEFAULT_PRODUCTS);
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

  const handlePurchase = async (productId) => {
    try {
      const product = products.find(p => p.id === productId);
      if (!product) {
        console.error('Product not found:', productId);
        return;
      }

      // Optimistically update the UI
      const newBalance = (room.balance || 0) + product.price;
      const timestamp = new Date();
      setRoom(prev => ({
        ...prev,
        balance: newBalance,
        lastPurchase: {
          productName: product.name,
          amount: product.price,
          timestamp
        }
      }));

      // Make the actual purchase
      await addPurchase({
        roomId,
        productId,
        productName: product.name,
        amount: product.price,
      });

    } catch (error) {
      console.error('Error making purchase:', error);
      // Revert optimistic update on error by fetching latest data
      const updatedRoom = await getRoom(roomId);
      setRoom(updatedRoom || { occupantName: '', balance: 0 });
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
    return date.toLocaleString('da-DK', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box 
      sx={{ 
        bgcolor: '#f5f6fa', 
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
              color: '#2c3e50',
              fontWeight: 'bold',
              mb: 2
            }}
          >
            Værelse {roomId}
          </Typography>
          <Box sx={{ 
            position: 'relative', 
            width: '100%',
            maxWidth: 300,
          }}>
            <TextField
              variant="outlined"
              placeholder="Klik for at tilføje beboer"
              value={room.occupantName}
              onChange={(e) => handleOccupantNameChange(e.target.value)}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  '& fieldset': {
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e74c3c',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e74c3c',
                  },
                  '& input': {
                    textAlign: 'center',
                    color: '#2c3e50',
                    '&::placeholder': {
                      color: '#666',
                      opacity: 0.7
                    }
                  }
                }
              }}
              InputProps={{
                endAdornment: (
                  <EditIcon 
                    sx={{ 
                      color: '#666',
                      opacity: 0.7,
                      mr: 1,
                      transition: 'all 0.2s',
                      '.MuiOutlinedInput-root:hover &': {
                        color: '#e74c3c',
                        opacity: 1
                      }
                    }} 
                  />
                )
              }}
            />
          </Box>
        </Box>

        {/* Balance */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 4, 
            mb: 4, 
            textAlign: 'center',
            bgcolor: room.balance > 0 ? '#fff3e0' : 'white',
            borderRadius: 3
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              mb: 1
            }}
          >
            SALDO
          </Typography>
          <Typography 
            variant="h2"
            sx={{ 
              color: room.balance > 0 ? '#e74c3c' : '#2c3e50',
              fontWeight: 'bold'
            }}
          >
            {room.balance?.toFixed(2)} kr
          </Typography>
        </Paper>

        {/* Last Purchase */}
        {room.lastPurchase && (
          <Paper 
            elevation={3}
            sx={{ 
              bgcolor: 'white',
              p: 3,
              mb: 4,
              borderRadius: 3
            }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#666',
                display: 'block',
                mb: 1,
                fontSize: '0.85rem'
              }}
            >
              SENESTE KØB
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
                {room.lastPurchase.productName}
              </Typography>
              <Box sx={{ textAlign: 'right' }}>
                <Typography sx={{ color: '#e74c3c', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  {room.lastPurchase.amount?.toFixed(2)} kr
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '0.9rem' }}>
                  {formatTimestamp(room.lastPurchase.timestamp)}
                </Typography>
              </Box>
            </Box>
          </Paper>
        )}

        {/* Purchase Buttons */}
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} key={product.id}>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={() => handlePurchase(product.id)}
                sx={{ 
                  bgcolor: '#e74c3c',
                  py: 2,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 8px rgba(231,76,60,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    bgcolor: '#c0392b',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(231,76,60,0.4)'
                  }
                }}
              >
                <Box>{product.name}</Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    fontSize: '0.9rem',
                    fontWeight: 'normal'
                  }}
                >
                  {product.price} kr
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Back Button */}
      <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.1)', bgcolor: 'white' }}>
        <Container maxWidth="sm">
          <Button
            fullWidth
            variant="text"
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIcon />}
            sx={{ 
              color: '#666',
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.05)',
                color: '#2c3e50'
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
