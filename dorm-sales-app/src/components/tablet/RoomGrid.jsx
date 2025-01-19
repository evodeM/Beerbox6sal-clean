import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';

const RoomGrid = () => {
  const navigate = useNavigate();
  const { data: rooms, loading, error } = useFirestore('rooms');

  // Create array of room numbers from 601 to 628
  const roomNumbers = Array.from({ length: 28 }, (_, i) => (601 + i).toString());

  const handleRoomClick = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  const RoomTile = ({ roomId }) => {
    const room = rooms?.find(r => r.id === roomId) || { occupantName: '', balance: 0 };
    
    return (
      <Paper
        elevation={3}
        sx={{
          p: 2,
          height: '120px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: room.balance > 0 ? '#fff3e0' : '#fff', // Light orange background if balance > 0
          '&:hover': {
            backgroundColor: '#e3f2fd',
          },
        }}
        onClick={() => handleRoomClick(roomId)}
      >
        <Typography variant="h4" component="div" align="center" sx={{ fontWeight: 'bold' }}>
          {roomId}
        </Typography>
        <Typography 
          variant="body2" 
          align="center"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {room.occupantName || 'Vacant'}
        </Typography>
        {room.balance > 0 && (
          <Typography 
            variant="body2" 
            align="center" 
            color="error"
            sx={{ fontWeight: 'bold' }}
          >
            {room.balance.toFixed(2)} kr
          </Typography>
        )}
      </Paper>
    );
  };

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading rooms...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        {roomNumbers.map((roomId) => (
          <Grid item xs={6} sm={4} md={3} key={roomId}>
            <RoomTile roomId={roomId} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomGrid;
