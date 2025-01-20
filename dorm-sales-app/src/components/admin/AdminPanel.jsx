import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  LockOutlined as LockIcon, 
  Settings as SettingsIcon, 
  FileDownload as ExportIcon 
} from '@mui/icons-material';
import { 
  getAdminConfig, 
  updateAdminConfig, 
  getProducts, 
  updateProduct, 
  getTotalSales,
  resetAllBalances
} from '../../firebase/services';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [products, setProducts] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [mobilePayNumber, setMobilePayNumber] = useState('');
  const [editProductDialogOpen, setEditProductDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchAdminConfig = async () => {
      try {
        const config = await getAdminConfig();
        setAdminPassword(config.adminPassword);
        setMobilePayNumber(config.mobilePayPhoneNumber);
      } catch (error) {
        console.error('Error fetching admin config:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchTotalSales = async () => {
      try {
        const sales = await getTotalSales();
        setTotalSales(sales);
      } catch (error) {
        console.error('Error fetching total sales:', error);
      }
    };

    fetchAdminConfig();
    fetchProducts();
    fetchTotalSales();
  }, []);

  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Forkert adgangskode');
    }
  };

  const handleProductEdit = async () => {
    try {
      await updateProduct(selectedProduct.id, {
        name: selectedProduct.name,
        price: selectedProduct.price
      });
      
      const updatedProducts = await getProducts();
      setProducts(updatedProducts);
      setEditProductDialogOpen(false);
    } catch (error) {
      console.error('Fejl ved opdatering af produkt:', error);
    }
  };

  const handleMonthlyReset = async () => {
    const confirmed = window.confirm('Er du sikker på, at du vil nulstille alle saldi?');
    if (confirmed) {
      try {
        await resetAllBalances();
        alert('Alle saldi er nulstillet');
      } catch (error) {
        console.error('Fejl ved nulstilling:', error);
      }
    }
  };

  const handleExportSales = async () => {
    try {
      // Placeholder for future export functionality
      alert('Eksport af salgsrapport kommer snart');
    } catch (error) {
      console.error('Fejl ved eksport af salgsrapport:', error);
    }
  };

  const handleMobilePayUpdate = async () => {
    try {
      await updateAdminConfig({ mobilePayPhoneNumber: mobilePayNumber });
      alert('MobilePay-nummer opdateret');
    } catch (error) {
      console.error('Fejl ved opdatering af MobilePay-nummer:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <Container maxWidth="xs">
        <Box 
          sx={{ 
            marginTop: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          <LockIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Adgangskode"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Log ind
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Panel
        </Typography>

        <Grid container spacing={3}>
          {/* Products Section */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Produkter</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Navn</TableCell>
                      <TableCell align="right">Pris</TableCell>
                      <TableCell align="right">Handlinger</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell align="right">{product.price} kr</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => {
                              setSelectedProduct(product);
                              setEditProductDialogOpen(true);
                            }}
                          >
                            Rediger
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Sales and Reset Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">Salgsrapport</Typography>
              <Typography>Samlet salg: {totalSales} kr</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<ExportIcon />}
                  onClick={handleExportSales}
                >
                  Eksporter CSV
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleMonthlyReset}
                >
                  Nulstil saldi
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* MobilePay Configuration */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">MobilePay Indstillinger</Typography>
              <TextField
                fullWidth
                label="MobilePay Nummer"
                value={mobilePayNumber}
                onChange={(e) => setMobilePayNumber(e.target.value)}
                sx={{ mt: 2 }}
              />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleMobilePayUpdate}
              >
                Opdater
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Edit Product Dialog */}
      <Dialog 
        open={editProductDialogOpen} 
        onClose={() => setEditProductDialogOpen(false)}
      >
        <DialogTitle>Rediger Produkt</DialogTitle>
        <DialogContent>
          <TextField
            label="Navn"
            fullWidth
            value={selectedProduct?.name || ''}
            onChange={(e) => setSelectedProduct(prev => ({ ...prev, name: e.target.value }))}
            sx={{ mb: 2, mt: 2 }}
          />
          <TextField
            label="Pris"
            type="number"
            fullWidth
            value={selectedProduct?.price || ''}
            onChange={(e) => setSelectedProduct(prev => ({ ...prev, price: Number(e.target.value) }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditProductDialogOpen(false)}>Annuller</Button>
          <Button onClick={handleProductEdit} variant="contained">Gem</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminPanel;
