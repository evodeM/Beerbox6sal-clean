import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';
import { getAdminConfig } from '../../firebase/services';

const TabletLayout = ({ children }) => {
  const navigate = useNavigate();
  const [adminDialogOpen, setAdminDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminAccess = async () => {
    try {
      const config = await getAdminConfig();
      if (config?.adminPassword === password) {
        setAdminDialogOpen(false);
        setPassword('');
        setError('');
        navigate('/admin');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Error verifying password');
      console.error('Admin access error:', err);
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: '#1A1A1A'
    }}>
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: '#2D2D2D',
          boxShadow: 'none',
          borderBottom: '1px solid #333333'
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              cursor: 'pointer',
              color: 'white',
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/')}
          >
            DormDrinks 6.sal
          </Typography>
          <IconButton 
            onClick={() => setAdminDialogOpen(true)}
            size="large"
            sx={{ 
              color: 'white',
              '&:hover': {
                color: '#FF4444'
              }
            }}
          >
            <AdminPanelSettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Admin Login Dialog */}
      <Dialog 
        open={adminDialogOpen} 
        onClose={() => setAdminDialogOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: '#2D2D2D',
            color: 'white'
          }
        }}
      >
        <DialogTitle>Admin Access</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Admin Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAdminAccess();
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: '#444444',
                },
                '&:hover fieldset': {
                  borderColor: '#666666',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF4444',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#CCCCCC',
                '&.Mui-focused': {
                  color: '#FF4444',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={() => setAdminDialogOpen(false)}
            sx={{ 
              color: '#CCCCCC',
              '&:hover': {
                color: 'white'
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAdminAccess} 
            variant="contained"
            sx={{
              bgcolor: '#FF4444',
              '&:hover': {
                bgcolor: '#FF6666'
              }
            }}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TabletLayout;
