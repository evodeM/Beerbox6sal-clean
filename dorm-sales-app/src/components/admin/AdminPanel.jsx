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
  DialogActions,
  Container
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { getTotalSales, getProducts, updateProduct, resetAllBalances, getAdminConfig, updateAdminConfig, ensureDefaultProducts } from '../../firebase/services';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [totalSales, setTotalSales] = useState(0);
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState('');
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [mobilePayNumber, setMobilePayNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Ensure we have all default products
      await ensureDefaultProducts();
      
      const sales = await getTotalSales();
      setTotalSales(sales);
      
      const productsData = await getProducts();
      setProducts(productsData);

      const adminConfig = await getAdminConfig();
      setMobilePayNumber(adminConfig.mobilePayPhoneNumber || '');
    };
    fetchData();
  }, []);

  const handleProductUpdate = async (productId, updates) => {
    try {
      await updateProduct(productId, updates);
      const updatedProducts = await getProducts();
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleMobilePayUpdate = async () => {
    try {
      await updateAdminConfig({ mobilePayPhoneNumber: mobilePayNumber });
    } catch (error) {
      console.error('Error updating MobilePay number:', error);
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
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#f5f6fa',
      py: 3
    }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4,
          gap: 2
        }}>
          <IconButton 
            onClick={() => navigate('/')}
            sx={{ color: '#2c3e50' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#2c3e50',
              fontWeight: 'bold',
              flexGrow: 1
            }}
          >
            Admin Panel
          </Typography>
          <IconButton sx={{ color: '#2c3e50' }}>
            <SettingsIcon />
          </IconButton>
        </Box>

        {/* Total Sales */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
            Total Sales
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            {totalSales} DKK
          </Typography>
        </Paper>

        {/* MobilePay Settings */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 3, 
            mb: 4,
            borderRadius: 3
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3,
              color: '#2c3e50',
              fontWeight: 'bold'
            }}
          >
            MobilePay Indstillinger
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="MobilePay Nummer"
              value={mobilePayNumber}
              onChange={(e) => setMobilePayNumber(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#fff',
                  '&:hover fieldset': {
                    borderColor: '#3498db',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3498db',
                  },
                }
              }}
            />
            <Button 
              variant="contained"
              onClick={handleMobilePayUpdate}
              sx={{
                bgcolor: '#e74c3c',
                '&:hover': {
                  bgcolor: '#c0392b',
                }
              }}
            >
              Gem
            </Button>
          </Box>
        </Paper>

        {/* Edit Products */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 3, 
            mb: 4,
            borderRadius: 3
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3,
              color: '#2c3e50',
              fontWeight: 'bold'
            }}
          >
            Rediger Produkter
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} key={product.id}>
                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 1,
                      color: '#666',
                      fontWeight: 'bold'
                    }}
                  >
                    Produkt Navn
                  </Typography>
                  <TextField
                    fullWidth
                    value={product.name}
                    onChange={(e) => handleProductUpdate(product.id, { name: e.target.value })}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#fff',
                        '&:hover fieldset': {
                          borderColor: '#3498db',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3498db',
                        },
                      }
                    }}
                  />
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 1,
                      color: '#666',
                      fontWeight: 'bold'
                    }}
                  >
                    Pris (DKK)
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    value={product.price}
                    onChange={(e) => handleProductUpdate(product.id, { price: Number(e.target.value) })}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: '#fff',
                        '&:hover fieldset': {
                          borderColor: '#3498db',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3498db',
                        },
                      }
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Reports and Reset */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 3, 
            mb: 4,
            borderRadius: 3
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}
              >
                Generer Månedlig Rapport
              </Typography>
              <Button 
                variant="contained"
                onClick={handleExportCSV}
                sx={{
                  bgcolor: '#e74c3c',
                  '&:hover': {
                    bgcolor: '#c0392b',
                  }
                }}
              >
                Eksporter CSV
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}
              >
                Nulstil Saldi
              </Typography>
              <Button 
                variant="contained"
                color="error"
                onClick={() => setConfirmDialogOpen(true)}
                sx={{
                  bgcolor: '#e74c3c',
                  '&:hover': {
                    bgcolor: '#c0392b',
                  }
                }}
              >
                Bekræft
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Send Notification */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 3,
            borderRadius: 3
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2,
              color: '#2c3e50',
              fontWeight: 'bold'
            }}
          >
            Send Notifikation
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Skriv din besked her..."
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                bgcolor: '#fff',
                '&:hover fieldset': {
                  borderColor: '#3498db',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3498db',
                },
              }
            }}
          />
          <Button 
            variant="contained"
            onClick={handleSendNotification}
            fullWidth
            sx={{
              bgcolor: '#e74c3c',
              '&:hover': {
                bgcolor: '#c0392b',
              }
            }}
          >
            Send
          </Button>
        </Paper>
      </Container>

      {/* Confirm Dialog */}
      <Dialog 
        open={confirmDialogOpen} 
        onClose={() => setConfirmDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 2
          }
        }}
      >
        <DialogTitle sx={{ 
          color: '#2c3e50',
          fontWeight: 'bold'
        }}>
          Bekræft Nulstilling
        </DialogTitle>
        <DialogContent>
          <Typography color="text.secondary">
            Er du sikker på at du vil nulstille alle saldi? Denne handling kan ikke fortrydes.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setConfirmDialogOpen(false)}
            sx={{ color: '#666' }}
          >
            Annuller
          </Button>
          <Button 
            onClick={handleResetBalances} 
            sx={{
              bgcolor: '#e74c3c',
              color: 'white',
              '&:hover': {
                bgcolor: '#c0392b',
              }
            }}
          >
            Nulstil
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPanel;
