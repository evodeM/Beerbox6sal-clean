import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const TabletLayout = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: '#1a1a1a'
    }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default TabletLayout;
