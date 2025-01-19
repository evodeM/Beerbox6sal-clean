import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { getTotalSales, getProducts, updateProduct, resetAllBalances } from '../../firebase/services';

const AdminPanel = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState('');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const sales = await getTotalSales();
      setTotalSales(sales);
      
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  const handleProductPriceChange = async (productName, newPrice) => {
    try {
      await updateProduct(productName, { price: Number(newPrice) });
      const updatedProducts = await getProducts();
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product price:', error);
    }
  };

  const handleExportCSV = () => {
    // TODO: Implement CSV export
  };

  const handleResetBalances = async () => {
    try {
      await resetAllBalances();
      setConfirmDialogOpen(false);
    } catch (error) {
      console.error('Error resetting balances:', error);
    }
  };

  const handleSendNotification = () => {
    // TODO: Implement notification sending
    setNotification('');
  };

  return (
    <Box sx={{ p: 3, maxWidth: '800px', mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Admin Panel
        </Typography>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Box>

      {/* Total Sales */}
      <Paper sx={{ p: 4, mb: 4, bgcolor: '#2c3e50', color: 'white' }}>
        <Typography variant="h3" align="center">
          Total Sales: {totalSales} DKK
        </Typography>
      </Paper>

      {/* Edit Products */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Edit Products</Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} key={product.name}>
              <Typography variant="subtitle1">{product.name}</Typography>
              <TextField
                fullWidth
                type="number"
                value={product.price}
                onChange={(e) => handleProductPriceChange(product.name, e.target.value)}
                sx={{ bgcolor: 'grey.100' }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Reports and Reset */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>Generate Monthly Report</Typography>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleExportCSV}
              sx={{ bgcolor: '#e74c3c' }}
            >
              Export CSV
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>Reset Balances</Typography>
            <Button 
              variant="contained" 
              color="error"
              onClick={() => setConfirmDialogOpen(true)}
              sx={{ bgcolor: '#e74c3c' }}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Send Notification */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Send Notification</Typography>
        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder="Enter your message here..."
          value={notification}
          onChange={(e) => setNotification(e.target.value)}
          sx={{ mb: 2, bgcolor: 'grey.100' }}
        />
        <Button 
          variant="contained"
          onClick={handleSendNotification}
          sx={{ bgcolor: '#e74c3c' }}
        >
          Send
        </Button>
      </Paper>

      {/* Confirm Dialog */}
      <Dialog open={confirmDialogOpen} onClose={() => setConfirmDialogOpen(false)}>
        <DialogTitle>Confirm Reset</DialogTitle>
        <DialogContent>
          Are you sure you want to reset all balances? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleResetBalances} color="error">Reset</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPanel;
