import React, { useMemo } from 'react';
import { Grid, Paper, Typography, Box, Container, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SettingsIcon from '@mui/icons-material/Settings';

const RoomGrid = () => {
  const navigate = useNavigate();
  const { data: rooms } = useFirestore('rooms');

  // Find room with highest balance
  const maxBalance = Math.max(...rooms.map(room => room.balance || 0));

  // Memoize room data to prevent unnecessary re-renders
  const roomsMap = useMemo(() => {
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
    const isHighestBalance = room.balance === maxBalance && room.balance > 0;

    return (
      <Paper
        elevation={3}
        sx={{
          p: 3,
          height: '100%',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '12px',
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          },
        }}
        onClick={() => handleRoomClick(roomId)}
      >
        {isHighestBalance && (
          <WorkspacePremiumIcon 
            sx={{ 
              position: 'absolute',
              top: -10,
              right: -10,
              color: '#ffd700',
              fontSize: '2rem',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              transform: 'rotate(12deg)',
            }} 
          />
        )}
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            mb: 1
          }}
        >
          {roomId}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#666',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            px: 2
          }}
        >
          {room.occupantName || 'Tomt værelse'}
        </Typography>
        {room.balance > 0 && (
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#e74c3c',
              mt: 1,
              fontWeight: 'bold'
            }}
          >
            {room.balance} kr
          </Typography>
        )}
      </Paper>
    );
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        py: 3,
        px: { xs: 1, sm: 2 },
        minHeight: '100vh',
        bgcolor: '#f5f6fa',
        position: 'relative'
      }}
    >
      <IconButton
        onClick={() => navigate('/admin')}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: '#2c3e50',
          opacity: 0.7,
          '&:hover': {
            opacity: 1
          }
        }}
      >
        <SettingsIcon />
      </IconButton>

      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        sx={{ 
          color: '#2c3e50',
          mb: 1,
          fontWeight: 'bold'
        }}
      >
        DormDrinks 6.sal
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        component="div" 
        align="center"
        sx={{ 
          color: '#666',
          mb: 4
        }}
      >
        Beer, Soda & Beyond
      </Typography>
      
      <Grid 
        container 
        spacing={2}
        sx={{
          width: '100%',
          margin: 0,
          maxWidth: '1024px',
          mx: 'auto'
        }}
      >
        {Array.from({ length: 28 }, (_, i) => i + 601).map((roomId) => (
          <Grid item xs={4} sm={3} key={roomId}>
            <RoomTile roomId={roomId.toString()} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RoomGrid;
