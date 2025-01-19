import React, { useMemo } from 'react';
import { Grid, Paper, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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
          p: 2,
          height: '130px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: room.balance > 0 ? '#fff3e0' : '#fff',
          borderRadius: '12px',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          position: 'relative',
          '&:hover': {
            transform: 'scale(1.02)',
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
          align="center" 
          sx={{ 
            fontWeight: 'bold',
            mb: 1,
            color: '#2c3e50'
          }}
        >
          {roomId}
        </Typography>
        <Typography 
          variant="body1" 
          align="center"
          sx={{
            color: '#666',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {room.occupantName || ''}
        </Typography>
        {room.balance > 0 && (
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ 
              color: '#e74c3c',
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

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        py: 2,
        px: { xs: 1, sm: 2 },
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#1a1a1a'
      }}
    >
      <Grid 
        container 
        spacing={2}
        sx={{
          width: '100%',
          margin: 0,
          // Optimize for iPad (1024x768) and similar tablets
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
