import React, { useMemo } from 'react';
import { Grid, Paper, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';

const RoomGrid = () => {
  const navigate = useNavigate();
  const { data: rooms, loading } = useFirestore('rooms');

  // Memoize room data to prevent unnecessary re-renders
  const roomsMap = useMemo(() => {
    if (!rooms) return {};
    return rooms.reduce((acc, room) => {
      acc[room.id] = room;
      return acc;
    }, {});
  }, [rooms]);

  const handleRoomClick = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  const RoomTile = ({ roomId }) => {
    const room = roomsMap[roomId] || { occupantName: '', balance: 0 };
    
    return (
      <Paper
        elevation={3}
        sx={{
          p: 2,
          height: '130px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#2D2D2D',
          color: 'white',
          borderRadius: '16px',
          transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            backgroundColor: '#3D3D3D',
          },
        }}
        onClick={() => handleRoomClick(roomId)}
      >
        <Typography 
          variant="h4" 
          component="div" 
          align="center" 
          sx={{ 
            fontWeight: 'bold',
            mb: 1,
          }}
        >
          Room {roomId}
        </Typography>
        <Typography 
          variant="body1" 
          align="center"
          sx={{
            color: '#CCCCCC',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Occupant: {room.occupantName || '[Name]'}
        </Typography>
        {room.balance > 0 && (
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              color: '#FF4444',
              mt: 1,
              fontWeight: 'bold'
            }}
          >
            {room.balance.toFixed(2)} kr
          </Typography>
        )}
      </Paper>
    );
  };

  // Generate room numbers only once
  const roomNumbers = useMemo(() => 
    Array.from({ length: 28 }, (_, i) => (601 + i).toString()),
    []
  );

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h6" align="center" color="textSecondary">
          Loading rooms...
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ 
      bgcolor: '#1A1A1A', 
      minHeight: '100vh', 
      pt: 3, 
      pb: 10 
    }}>
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        sx={{ 
          color: 'white', 
          mb: 4,
          fontWeight: 'bold'
        }}
      >
        DormDrinks 6.sal
        <Typography 
          variant="subtitle1" 
          component="div" 
          sx={{ 
            color: '#CCCCCC',
            mt: 1 
          }}
        >
          Beer, Soda & Beyond
        </Typography>
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {roomNumbers.map((roomId) => (
            <Grid item xs={12} sm={6} md={3} key={roomId}>
              <RoomTile roomId={roomId} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RoomGrid;
