import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded password for now - should be moved to environment variables
    if (password === 'admin123') {
      onLogin();
    } else {
      setError('Forkert kodeord');
    }
  };

  return (
    <Box 
      sx={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#1a1a1a',
        p: 2
      }}
    >
      <Box sx={{ mb: 4 }}>
        <IconButton 
          onClick={() => navigate('/')}
          sx={{ color: '#fff' }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Box 
        sx={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper 
          sx={{ 
            p: 4,
            maxWidth: 400,
            width: '100%',
            bgcolor: '#2c3e50'
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              color: '#fff',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Admin Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="password"
              placeholder="Indtast kodeord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error}
              helperText={error}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e74c3c',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: '#e74c3c',
                }
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#e74c3c',
                color: '#fff',
                py: 1.5,
                '&:hover': {
                  bgcolor: '#c0392b',
                }
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminLogin;
