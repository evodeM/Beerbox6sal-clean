import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Alert,
} from '@mui/material';
import ProductManagement from './ProductManagement';
import NotificationCenter from './NotificationCenter';
import SalesReport from './SalesReport';
import RecentPurchases from './RecentPurchases';
import AdminSettings from './AdminSettings';
import { useNavigate } from 'react-router-dom';

// Simple password for admin access
const ADMIN_PASSWORD = 'admin123'; // This should be moved to environment variables

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Forkert adgangskode');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    navigate('/');
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          bgcolor: '#f5f6fa',
          p: 2
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Admin Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            fullWidth
            type="password"
            label="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Log ind
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f6fa', p: 3 }}>
      <Paper sx={{ mb: 3, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="h1">
            Admin Panel
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            Log ud
          </Button>
        </Box>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap'
            }
          }}
        >
          <Tab label="Produkter" />
          <Tab label="Beskeder" />
          <Tab label="Rapporter" />
          <Tab label="Seneste Køb" />
          <Tab label="Indstillinger" />
        </Tabs>
      </Paper>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <ProductManagement />}
        {activeTab === 1 && <NotificationCenter />}
        {activeTab === 2 && <SalesReport />}
        {activeTab === 3 && <RecentPurchases />}
        {activeTab === 4 && <AdminSettings />}
      </Box>
    </Box>
  );
};

export default AdminLayout;
