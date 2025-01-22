import React, { useMemo } from 'react';
import { Grid, Paper, Typography, Box, Container, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SettingsIcon from '@mui/icons-material/Settings';

const RoomGrid = () => {
  const navigate = useNavigate();
  const { data: rooms, loading } = useFirestore('rooms', [], { realtime: false });

  // Find room with highest balance
  const maxBalance = useMemo(() => {
    return Math.max(...rooms.map(room => room.balance || 0));
  }, [rooms]);

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

  const handleAdminClick = () => {
    navigate('/admin');
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
      </Paper>
    );
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        py: 1,
        px: { xs: 1, sm: 2 },
        minHeight: '100vh',
        maxHeight: '100vh',
        bgcolor: '#f5f6fa',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ 
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#f5f6fa',
        pb: 1,
        pt: 1,
        px: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 1
        }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SettingsIcon />}
            onClick={handleAdminClick}
            sx={{
              minWidth: '100px',
              height: '36px'
            }}
          >
            Admin
          </Button>
        </Box>

        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textAlign: 'center',
            width: '100%'
          }}
        >
          DormDrinks 6.sal
        </Typography>

        <Typography 
          variant="subtitle1" 
          component="div" 
          sx={{ 
            color: '#666',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            mt: 1,
            textAlign: 'center',
            width: '100%'
          }}
        >
          Beer, Soda & Beyond
        </Typography>
      </Box>
      
      <Box sx={{ 
        flex: 1,
        overflow: 'auto',
        mt: 1
      }}>
        <Grid 
          container 
          spacing={1.5}
          sx={{
            width: '100%',
            m: 0,
            p: 1
          }}
        >
          {Array.from({ length: 28 }, (_, i) => i + 601).map((roomId) => (
            <Grid 
              item 
              xs={6}
              sm={4}
              md={3}
              key={roomId}
              sx={{
                height: '100%'
              }}
            >
              <RoomTile roomId={roomId.toString()} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default RoomGrid;
