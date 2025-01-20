import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
  IconButton,
  Button,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { db } from '../firebase/config';
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
  addDoc,
  deleteDoc
} from 'firebase/firestore';
import { getRoom, initializeDefaultData } from '../firebase/services';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import RefreshIcon from '@mui/icons-material/Refresh';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#f5f6fa',
  overflowX: 'hidden',
  position: 'relative'
}));

const Header = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '48px 16px 24px 16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '0 0 24px 24px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  marginBottom: 24,
  width: '100%',
  paddingTop: 'calc(env(safe-area-inset-top) + 48px)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
    height: '4px',
    background: 'linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)',
    borderRadius: '2px',
    opacity: 0.7
  }
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: '0 16px',
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto'
}));

const BalanceCard = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#f8f9fa',
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:active': {
    transform: 'scale(0.98)',
  },
}));

const NotificationCard = styled(Paper)(({ theme }) => ({
  padding: '16px',
  marginTop: '16px',
  marginBottom: '16px',
  borderRadius: '12px',
  backgroundColor: '#F8F9FF',
  border: '1px solid rgba(90, 120, 255, 0.1)',
}));

const PurchaseHistoryItem = styled(Paper)(({ theme }) => ({
  padding: '12px',
  marginBottom: '8px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}));

const RefreshButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '16px',
  top: '16px',
  backgroundColor: 'rgba(255,255,255,0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,1)',
  },
}));

const InstallPrompt = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#1976d2',
  color: 'white',
  zIndex: 1000,
  borderRadius: '16px 16px 0 0'
}));

const EnhancedPWAView = () => {
  const [room, setRoom] = useState(null);
  const [roomId, setRoomId] = useState(localStorage.getItem('selectedRoom'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  // Generate room numbers 601-628
  const roomNumbers = Array.from({ length: 28 }, (_, i) => String(601 + i));

  const handleRoomSelect = (event) => {
    const newRoomId = event.target.value;
    setRoomId(newRoomId);
    localStorage.setItem('selectedRoom', newRoomId);
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
    return date.toLocaleString('da-DK', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
    });
  };

  useEffect(() => {
    let unsubscribe = null;

    const setupRealTimeListener = async () => {
      if (!roomId) return;

      try {
        setLoading(true);
        console.log('Loading data for room:', roomId);

        // Initialize default data if needed
        await initializeDefaultData();

        // Set up real-time listener for room data
        const roomRef = doc(db, 'rooms', roomId);
        unsubscribe = onSnapshot(roomRef, async (roomDoc) => {
          if (roomDoc.exists()) {
            const roomData = { id: roomDoc.id, ...roomDoc.data() };

            // First get all purchases for the room
            const purchasesRef = collection(db, 'purchases');
            const purchasesQuery = query(
              purchasesRef, 
              where('roomId', '==', roomId)
            );
            
            try {
              const snapshot = await getDocs(purchasesQuery);
              const allPurchases = [];
              
              snapshot.forEach((doc) => {
                const purchaseData = doc.data();
                allPurchases.push({ 
                  id: doc.id, 
                  ...purchaseData,
                  timestamp: purchaseData.timestamp
                });
              });

              // Sort purchases by timestamp and take the latest 3
              const recentPurchases = allPurchases
                .sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds)
                .slice(0, 3);

              const updatedRoomData = {
                ...roomData,
                recentPurchases
              };

              console.log('Updated room data:', updatedRoomData);
              setRoom(updatedRoomData);
            } catch (error) {
              console.error('Error fetching purchases:', error);
            }
          }
        }, (error) => {
          console.error('Room listener error:', error);
          setError(error);
        });

      } catch (error) {
        console.error('Error setting up listener:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setupRealTimeListener();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [roomId]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // First get all purchases for the room
      const purchasesRef = collection(db, 'purchases');
      const purchasesQuery = query(
        purchasesRef,
        where('roomId', '==', roomId)
      );
      
      const snapshot = await getDocs(purchasesQuery);
      const allPurchases = [];
      
      snapshot.forEach((doc) => {
        const purchaseData = doc.data();
        allPurchases.push({ 
          id: doc.id, 
          ...purchaseData,
          timestamp: purchaseData.timestamp
        });
      });

      // Sort purchases by timestamp and take the latest 3
      const recentPurchases = allPurchases
        .sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds)
        .slice(0, 3);

      setRoom(prev => ({
        ...prev,
        recentPurchases
      }));

      setNotification({ open: true, message: 'Data refreshed successfully', severity: 'success' });
    } catch (error) {
      console.error('Error refreshing data:', error);
      setNotification({ open: true, message: 'Error refreshing data', severity: 'error' });
    } finally {
      setIsRefreshing(false);
    }
  };

  const handlePullToRefresh = async (event) => {
    const touchStart = event.touches[0].clientY;
    
    const handleTouchMove = (e) => {
      const touchEnd = e.touches[0].clientY;
      if (touchEnd - touchStart > 100 && window.scrollY === 0) {
        handleRefresh();
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleTouchMove);
    }, { once: true });
  };

  const handleMobilePayClick = async () => {
    const adminConfigRef = doc(db, 'adminConfig', 'general');
    const configDoc = await getDoc(adminConfigRef);
    
    if (configDoc.exists()) {
      const { mobilePayPhoneNumber } = configDoc.data();
      const amount = room?.balance || 0;
      window.location.href = `mobilepay://send?phone=${mobilePayPhoneNumber}&amount=${amount}&comment=Værelse ${roomId}`;
    }
  };

  const handlePayment = () => {
    const mobilepayUrl = "https://qr.mobilepay.dk/p/02OeCN5J8MKzg-nbza0GUmlJ-24UKFkusa_TwL1txQBhbP2FDD2yRBUHtOX8WyxkZ-Qjxba4kzlIgqkDrA==";
    window.location.href = mobilepayUrl;
  };

  // Detect iOS device
  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);
  }, []);

  // Handle PWA install prompt
  useEffect(() => {
    // Only show install prompt if not already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
    if (isInstalled) {
      setShowInstallPrompt(false);
      return;
    }

    if (isIOS) {
      // For iOS, show the prompt after a short delay
      setTimeout(() => {
        // Only show if not dismissed before
        const hasBeenPrompted = localStorage.getItem('iosInstallPrompted');
        if (!hasBeenPrompted) {
          setShowInstallPrompt(true);
        }
      }, 2000);
    } else {
      // For Android/other browsers
      const handler = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallPrompt(true);
      };

      window.addEventListener('beforeinstallprompt', handler);
      return () => window.removeEventListener('beforeinstallprompt', handler);
    }
  }, [isIOS]);

  const handleInstallClick = async () => {
    if (isIOS) {
      // Mark as prompted to not show again
      localStorage.setItem('iosInstallPrompted', 'true');
      setShowInstallPrompt(false);
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismissPrompt = () => {
    if (isIOS) {
      localStorage.setItem('iosInstallPrompted', 'true');
    }
    setShowInstallPrompt(false);
  };

  // Handle push notification setup
  const setupPushNotifications = async (roomId) => {
    try {
      // Check if notifications are supported
      if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        return;
      }

      // If permission is not granted and not denied, show prompt
      if (Notification.permission === 'default') {
        setShowNotificationPrompt(true);
        return;
      }

      if (Notification.permission === 'granted') {
        await registerForPushNotifications(roomId);
      }
    } catch (error) {
      console.error('Error setting up push notifications:', error);
    }
  };

  // Register for push notifications
  const registerForPushNotifications = async (roomId) => {
    try {
      const messaging = getMessaging();
      
      // Get FCM token
      const currentToken = await getToken(messaging, {
        vapidKey: 'BK5JiQu6vhdhV8bzrHp6W5Kn2h-fkrYvudQKLeOHWWhui4WzYFG-Oq-UJmc4gDNuosGR3b9ntehs88GavTx9Udc'
      });

      if (currentToken) {
        // Save the token to Firestore
        const tokensRef = collection(db, 'fcmTokens');
        const q = query(tokensRef, where('roomId', '==', roomId));
        const querySnapshot = await getDocs(q);
        
        // Remove old tokens for this room
        querySnapshot.docs.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Add new token
        await addDoc(tokensRef, {
          token: currentToken,
          roomId: roomId,
          timestamp: new Date()
        });

        // Set up message handler
        onMessage(messaging, (payload) => {
          // Show notification even when app is in foreground
          new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: '/icon-192x192.png'
          });
        });
      }
    } catch (error) {
      console.error('Error registering for push notifications:', error);
    }
  };

  // Handle notification permission request
  const handleNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      setShowNotificationPrompt(false);

      if (permission === 'granted' && room?.id) {
        await registerForPushNotifications(room.id);
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  useEffect(() => {
    if (room?.id) {
      setupPushNotifications(room.id);
    }
  }, [room?.id]);

  const LoadingSkeleton = () => (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Skeleton variant="text" width={120} height={24} sx={{ mb: 1, mx: 'auto' }} />
        <Skeleton variant="text" width={80} height={32} sx={{ mx: 'auto' }} />
      </Box>
      
      <Skeleton variant="rounded" height={140} sx={{ mb: 3, borderRadius: 3 }} />
      <Skeleton variant="rounded" height={80} sx={{ mb: 3, borderRadius: 2 }} />
      
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="text" width={140} height={24} sx={{ mb: 2 }} />
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} variant="rounded" height={60} sx={{ mb: 1, borderRadius: 1 }} />
        ))}
      </Box>
    </Box>
  );

  if (!roomId) {
    return (
      <StyledContainer>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Velkommen
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, color: '#666666' }}>
            til din personlige oversigt
          </Typography>
          <Typography sx={{ mb: 4, color: '#666666' }}>
            Vælg dit værelse for at komme i gang. Dette er en engangskonfiguration.
          </Typography>
          <TextField
            select
            fullWidth
            label="Vælg dit værelse"
            onChange={handleRoomSelect}
            SelectProps={{
              native: true
            }}
            sx={{ 
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              '& .MuiInputBase-input': { 
                color: '#333333',
                fontSize: '1.1rem',
                padding: '16px'
              },
              '& .MuiInputLabel-root': { 
                color: '#666666',
                fontSize: '1.1rem'
              }
            }}
          >
            <option value="">Vælg værelse</option>
            {roomNumbers.map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </TextField>
          <Typography variant="caption" sx={{ display: 'block', mt: 2, color: '#666666' }}>
            Bemærk: Dette valg gemmes til fremtidige besøg
          </Typography>
        </Box>
      </StyledContainer>
    );
  }

  if (!room || loading) {
    return (
      <StyledContainer>
        <Header>
          <LoadingSkeleton />
        </Header>
      </StyledContainer>
    );
  }

  if (error) {
    return (
      <StyledContainer>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography color="error">Error loading data. Please try again.</Typography>
          <Button onClick={() => window.location.reload()} sx={{ mt: 2 }}>
            Reload
          </Button>
        </Box>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer onTouchStart={handlePullToRefresh}>
      <Header>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          mt: 'env(safe-area-inset-top)'
        }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: '#5A78FF',
              fontWeight: 500,
              letterSpacing: '0.2px',
              mb: 0.5,
              background: 'linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {room.occupantName || 'Ingen beboer'}
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 800,
              color: '#2c3e50',
              letterSpacing: '-0.5px'
            }}
          >
            {roomId}
          </Typography>
        </Box>
        <RefreshButton
          onClick={handleRefresh}
          disabled={isRefreshing}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#5A78FF',
            '&:hover': {
              backgroundColor: 'rgba(90, 120, 255, 0.08)'
            }
          }}
        >
          <RefreshIcon sx={{ 
            animation: isRefreshing ? 'spin 1s linear infinite' : 'none',
            transition: 'transform 0.2s ease'
          }} />
        </RefreshButton>
      </Header>

      <ContentWrapper>
        <BalanceCard elevation={3} onClick={handlePayment}>
          <Typography variant="h6" sx={{ mb: 1, color: '#333' }}>
            Køb i alt
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, color: room.balance > 0 ? '#e74c3c' : '#2ecc71' }}>
            {room.balance?.toFixed(2)} kr
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={handlePayment}
            sx={{
              backgroundColor: '#5A78FF',
              '&:hover': {
                backgroundColor: '#4A61D1'
              },
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem'
            }}
          >
            Betal med MobilePay
          </Button>
        </BalanceCard>

        <NotificationCard elevation={0}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <CampaignIcon sx={{ color: '#5A78FF', mt: 0.5 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5, color: '#2c3e50' }}>
                Beskeder
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Ingen nye beskeder
              </Typography>
            </Box>
          </Box>
        </NotificationCard>

        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, color: '#666', fontWeight: 500 }}>
            Seneste køb
          </Typography>
          {room.recentPurchases.map((purchase) => (
            <PurchaseHistoryItem 
              key={purchase.id}
              sx={{ 
                py: 1, 
                px: 2,
                mb: 0.5,
                backgroundColor: '#f8f9ff',
                borderRadius: 1
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {purchase.productName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatTimestamp(purchase.timestamp)}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
                {purchase.amount.toFixed(2)} kr
              </Typography>
            </PurchaseHistoryItem>
          ))}
          {room.recentPurchases.length === 0 && (
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
              Ingen køb endnu
            </Typography>
          )}
        </Box>
      </ContentWrapper>

      {showInstallPrompt && (
        <InstallPrompt elevation={3}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1 }}>
            <AddToHomeScreenIcon sx={{ mt: 0.5 }} />
            {isIOS ? (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Føj til hjemmeskærm
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  1. Tryk på 'Del' ikonet { }
                  <span style={{ 
                    fontSize: '1.4em', 
                    marginLeft: '8px',
                    color: '#4CAF50'
                  }}>
                    ⎙
                  </span>
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                  2. Scroll ned og vælg { }
                  <span style={{ 
                    fontWeight: 'bold',
                    marginLeft: '4px',
                    color: '#4CAF50'
                  }}>
                    'Føj til hjemmeskærm'
                  </span>
                </Typography>
              </Box>
            ) : (
              <Typography>
                Føj til hjemmeskærm for hurtig adgang
              </Typography>
            )}
          </Box>
          <Box>
            <IconButton
              color="inherit"
              onClick={handleDismissPrompt}
              sx={{ mr: 1 }}
            >
              ✕
            </IconButton>
            {!isIOS && (
              <Button
                variant="contained"
                color="inherit"
                onClick={handleInstallClick}
                sx={{ 
                  color: '#1976d2',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                Installer
              </Button>
            )}
          </Box>
        </InstallPrompt>
      )}

      {/* Notification Permission Dialog */}
      <Dialog
        open={showNotificationPrompt}
        onClose={() => setShowNotificationPrompt(false)}
      >
        <DialogTitle>Tillad Beskeder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vil du modtage beskeder om nye meddelelser og betalingspåmindelser?
            Du kan altid ændre dette senere i din browsers indstillinger.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowNotificationPrompt(false)}>
            Ikke nu
          </Button>
          <Button onClick={handleNotificationPermission} variant="contained">
            Tillad Beskeder
          </Button>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
};

export default EnhancedPWAView;
