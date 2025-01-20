import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  CircularProgress
} from '@mui/material';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editedProducts, setEditedProducts] = useState({});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
      setEditedProducts(
        productsData.reduce((acc, product) => ({
          ...acc,
          [product.id]: { name: product.name, price: product.price }
        }), {})
      );
    } catch (err) {
      setError('Fejl ved indlæsning af produkter');
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleProductChange = (productId, field, value) => {
    setEditedProducts(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: field === 'price' ? Number(value) : value
      }
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    setError('');
    try {
      await Promise.all(
        products.map(async (product) => {
          const edited = editedProducts[product.id];
          if (edited && (edited.name !== product.name || edited.price !== product.price)) {
            await updateDoc(doc(db, 'products', product.id), {
              name: edited.name,
              price: edited.price
            });
          }
        })
      );
      setSuccess('Produkter opdateret');
      loadProducts(); // Reload to get latest data
    } catch (err) {
      setError('Fejl ved opdatering af produkter');
      console.error('Error updating products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Produkt Administration
      </Typography>
      
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Produkt</TableCell>
              <TableCell>Pris (DKK)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={editedProducts[product.id]?.name || ''}
                    onChange={(e) => handleProductChange(product.id, 'name', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={editedProducts[product.id]?.price || 0}
                    onChange={(e) => handleProductChange(product.id, 'price', e.target.value)}
                    InputProps={{
                      inputProps: { min: 0, step: 1 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={loading}
        >
          Gem Ændringer
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductManagement;
