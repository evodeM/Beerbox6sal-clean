import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  getAdminConfig, 
  updateAdminConfig, 
  getProducts, 
  updateProduct, 
  getTotalSales,
  resetAllBalances
} from '../../firebase/services';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [mobilePayNumber, setMobilePayNumber] = useState('');
  const [editProductDialogOpen, setEditProductDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = await getAdminConfig();
        setMobilePayNumber(config.mobilePayPhoneNumber || '');

        const productsData = await getProducts();
        setProducts(productsData);

        const sales = await getTotalSales();
        setTotalSales(sales);
      } catch (error) {
        console.error('Fejl ved indlæsning af data:', error);
      }
    };

    fetchData();
  }, []);

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

  const handleMobilePayUpdate = async () => {
    try {
      await updateAdminConfig({ mobilePayPhoneNumber: mobilePayNumber });
      alert('MobilePay-nummer opdateret');
    } catch (error) {
      console.error('Fejl ved opdatering af MobilePay-nummer:', error);
    }
  };

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
    </Container>
  );
};

export default AdminPanel;
