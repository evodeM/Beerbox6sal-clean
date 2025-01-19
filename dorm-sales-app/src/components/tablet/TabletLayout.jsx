import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
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
      bgcolor: '#f5f6fa'
    }}>
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton 
            onClick={() => setAdminDialogOpen(true)}
            size="large"
            sx={{ 
              color: '#666',
              '&:hover': {
                color: '#e74c3c'
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
            bgcolor: 'white',
            color: '#333'
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
                color: '#333',
                '& fieldset': {
                  borderColor: '#ccc',
                },
                '&:hover fieldset': {
                  borderColor: '#aaa',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#e74c3c',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#666',
                '&.Mui-focused': {
                  color: '#e74c3c',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={() => setAdminDialogOpen(false)}
            sx={{ color: '#666' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAdminAccess} 
            variant="contained"
            sx={{
              bgcolor: '#e74c3c',
              '&:hover': {
                bgcolor: '#c0392b'
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
