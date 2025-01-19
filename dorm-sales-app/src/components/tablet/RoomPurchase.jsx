import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Typography, 
  Grid, 
  Paper,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getRoom, addPurchase, getProducts } from '../../firebase/services';

const RoomPurchase = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({ occupantName: '', balance: 0 });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const roomData = await getRoom(roomId);
      setRoom(roomData || { occupantName: '', balance: 0 });
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchData();
  }, [roomId]);

  const handlePurchase = async (productName) => {
    try {
      const product = products.find(p => p.name === productName);
      if (!product) {
        console.error('Product not found:', productName);
        return;
      }

      await addPurchase({
        roomId,
        productName: product.name,
        amount: product.price
      });

      const updatedRoom = await getRoom(roomId);
      setRoom(updatedRoom || { occupantName: '', balance: 0 });
    } catch (error) {
      console.error('Error making purchase:', error);
    }
  };

  return (
    <Box 
      sx={{ 
        height: '100vh',
        backgroundColor: '#1a1a1a',
        p: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <IconButton 
          onClick={() => navigate('/')}
          sx={{ color: '#fff', mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" sx={{ color: '#fff', flexGrow: 1 }}>
          Værelse {roomId}
        </Typography>
      </Box>

      <Paper 
        sx={{ 
          p: 3, 
          mb: 3,
          backgroundColor: '#fff3e0',
          borderRadius: '12px'
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {room.occupantName || 'Tomt værelse'}
        </Typography>
        <Typography variant="h4" sx={{ color: '#ff9800', fontWeight: 'bold' }}>
          Saldo: {room.balance || 0} kr
        </Typography>
        {room.lastPurchase && (
          <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
            Sidste køb: {room.lastPurchase.productName} ({room.lastPurchase.amount} kr)
          </Typography>
        )}
      </Paper>

      <Grid 
        container 
        spacing={2}
        sx={{ 
          flexGrow: 1,
          maxWidth: '1024px',
          mx: 'auto',
          width: '100%'
        }}
      >
        {products.map((product) => (
          <Grid item xs={6} sm={4} key={product.name}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                p: 3,
                backgroundColor: '#fff',
                color: '#1a1a1a',
                '&:hover': {
                  backgroundColor: '#ff9800',
                  color: '#fff'
                },
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
              onClick={() => handlePurchase(product.name)}
            >
              <Typography variant="h6">
                {product.name}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {product.price} kr
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomPurchase;
