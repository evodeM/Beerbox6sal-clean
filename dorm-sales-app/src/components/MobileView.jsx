import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  CircularProgress,
  IconButton,
  Button,
  TextField,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Badge
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  doc, 
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
  where,
  writeBatch
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { getRoom, getRooms } from '../firebase/services';
import RefreshIcon from '@mui/icons-material/Refresh';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import NotificationsIcon from '@mui/icons-material/Notifications';

// Styled Components
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f5f6fa',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '24px'
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '24px',
  textAlign: 'center'
}));

const RoomCard = styled(Paper)(({ theme }) => ({
  padding: '16px',
  marginBottom: '16px',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)'
  }
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginTop: '16px',
  borderRadius: '8px',
  textTransform: 'none'
}));

const NotificationBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  }
}));

const MobileView = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  // A2HS State
  const [showA2HSPrompt, setShowA2HSPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);

  const fetchRooms = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedRooms = await getRooms();
      setRooms(fetchedRooms);
      setError(null);
    } catch (err) {
      console.error('Error fetching rooms:', err);
      setError('Failed to load rooms. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Add to Home Screen Logic
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the default browser install prompt
      e.preventDefault();
      
      // Store the event for later use
      setDeferredPrompt(e);
      
      // Show custom A2HS prompt
      setShowA2HSPrompt(true);
    };

    // iOS Add to Home Screen detection
    const isIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };

    const handleIOSInstall = () => {
      if (isIOS()) {
        alert('For iOS: Tap the Share icon and then "Add to Home Screen"');
      }
    };

    // Event listeners for A2HS
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleA2HSInstall = async () => {
    if (deferredPrompt) {
      // Show the install prompt (Android)
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted A2HS');
      } else {
        console.log('User dismissed A2HS');
      }
      
      // Reset the deferredPrompt
      setDeferredPrompt(null);
      setShowA2HSPrompt(false);
    }
  };

  const handleRoomSelect = async (roomId) => {
    try {
      const roomData = await getRoom(roomId);
      setSelectedRoom(roomData);
    } catch (err) {
      console.error('Error selecting room:', err);
      setError('Failed to load room details.');
    }
  };

  const handleRefresh = () => {
    fetchRooms();
  };

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  const fetchNotifications = useCallback(() => {
    // Get current room ID (assuming it's stored in local storage)
    const currentRoomId = localStorage.getItem('selectedRoom');
    
    if (!currentRoomId) return;

    const notificationsRef = collection(db, 'notifications');
    const q = query(
      notificationsRef, 
      where('roomId', '==', currentRoomId),
      orderBy('timestamp', 'desc'),
      limit(20)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedNotifications = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      }));

      setNotifications(fetchedNotifications);
      setUnreadCount(fetchedNotifications.filter(n => !n.read).length);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const handleMarkNotificationsRead = async () => {
    const currentRoomId = localStorage.getItem('selectedRoom');
    if (!currentRoomId) return;

    try {
      const notificationsRef = collection(db, 'notifications');
      const q = query(
        notificationsRef, 
        where('roomId', '==', currentRoomId),
        where('read', '==', false)
      );

      const unreadNotifications = await getDocs(q);
      
      // Batch update to mark notifications as read
      const batch = writeBatch(db);
      unreadNotifications.forEach(doc => {
        batch.update(doc.ref, { read: true });
      });

      await batch.commit();
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  if (loading) {
    return (
      <StyledContainer>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Header>
        <Typography variant="h4" gutterBottom>
          DormDrinks 6.sal
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Beer, Soda & Beyond
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleRefresh} color="primary">
            <RefreshIcon />
          </IconButton>
          <IconButton onClick={() => setShowNotifications(true)} color="secondary">
            <NotificationBadge badgeContent={unreadCount} color="error">
              <NotificationsIcon />
            </NotificationBadge>
          </IconButton>
          <IconButton onClick={() => setShowA2HSPrompt(true)} color="secondary">
            <AddToHomeScreenIcon />
          </IconButton>
        </Box>
      </Header>

      {error && (
        <Snackbar 
          open={!!error} 
          autoHideDuration={6000} 
          onClose={() => setError(null)}
        >
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}

      <Dialog 
        open={showNotifications} 
        onClose={() => setShowNotifications(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            Beskeder
            {unreadCount > 0 && (
              <Button 
                size="small" 
                color="primary" 
                onClick={handleMarkNotificationsRead}
              >
                Markér alle som læst
              </Button>
            )}
          </Box>
        </DialogTitle>
        <DialogContent>
          {notifications.length === 0 ? (
            <Typography variant="body2" color="textSecondary" align="center">
              Ingen beskeder
            </Typography>
          ) : (
            <List>
              {notifications.map((notification) => (
                <ListItem 
                  key={notification.id} 
                  divider
                  sx={{ 
                    backgroundColor: !notification.read ? '#f0f0f0' : 'transparent'
                  }}
                >
                  <ListItemText
                    primary={notification.message}
                    secondary={notification.timestamp.toLocaleString()}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowNotifications(false)}>Luk</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showA2HSPrompt} onClose={() => setShowA2HSPrompt(false)}>
        <DialogTitle>Add to Home Screen</DialogTitle>
        <DialogContent>
          <Typography>
            Install DormDrinks 6.sal to your home screen for quick access!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowA2HSPrompt(false)}>Cancel</Button>
          <Button 
            onClick={handleA2HSInstall} 
            color="primary" 
            variant="contained"
          >
            Install
          </Button>
        </DialogActions>
      </Dialog>

      {rooms.map((room) => (
        <RoomCard key={room.id} onClick={() => handleRoomSelect(room.id)}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{room.occupantName || 'Ukendt Beboer'}</Typography>
            <Box display="flex" alignItems="center">
              <AccountBalanceWalletIcon color="primary" />
              <Typography variant="body1" ml={1}>
                {room.balance || 0} kr
              </Typography>
            </Box>
          </Box>
          <ActionButton 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={() => handleRoomSelect(room.id)}
          >
            Se Detaljer
          </ActionButton>
        </RoomCard>
      ))}

      {selectedRoom && (
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="h5">Rum Detaljer</Typography>
          <Typography>Navn: {selectedRoom.occupantName}</Typography>
          <Typography>Saldo: {selectedRoom.balance} kr</Typography>
        </Paper>
      )}
    </StyledContainer>
  );
};

export default MobileView;
