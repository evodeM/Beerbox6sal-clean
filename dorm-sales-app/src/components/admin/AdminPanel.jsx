import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{ mr: 2 }}
        >
          Tilbage
        </Button>
        <Typography variant="h4" component="h1">
          Admin Panel
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gap: 3,
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
      }}>
        <Typography>
          Admin panel er under udvikling. Flere funktioner kommer snart.
        </Typography>
      </Box>
    </Container>
  );
};

export default AdminPanel;
