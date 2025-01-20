import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Alert,
  CircularProgress,
  Divider
} from '@mui/material';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const NotificationCenter = () => {
  const [message, setMessage] = useState('');
  const [isEndOfMonth, setIsEndOfMonth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendNotification = async () => {
    if (!message.trim() && !isEndOfMonth) {
      setError('Beskeden kan ikke være tom');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Get all rooms to send notifications to
      const roomsSnapshot = await getDocs(collection(db, 'rooms'));
      const rooms = roomsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Get FCM tokens for all users
      const tokensRef = collection(db, 'fcmTokens');
      const tokensSnapshot = await getDocs(tokensRef);
      const tokens = tokensSnapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        if (data.roomId && data.token) {
          if (!acc[data.roomId]) {
            acc[data.roomId] = [];
          }
          acc[data.roomId].push(data.token);
        }
        return acc;
      }, {});

      // Create notifications in Firestore
      await Promise.all(rooms.map(async (room) => {
        const notificationData = {
          roomId: room.id,
          message: isEndOfMonth 
            ? `Hej ${room.occupantName || 'beboer'}! Din saldo er ${room.balance} kr. Venligst betal inden månedens udgang.`
            : message,
          timestamp: new Date(),
          read: false,
          type: isEndOfMonth ? 'payment' : 'announcement'
        };

        // Save notification to Firestore
        await addDoc(collection(db, 'notifications'), notificationData);

        // Send push notification if we have FCM tokens for this room
        if (tokens[room.id] && tokens[room.id].length > 0) {
          try {
            // Call Firebase Cloud Function to send the push notification
            const response = await fetch('https://us-central1-dorm-sales-app.cloudfunctions.net/sendPushNotification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                tokens: tokens[room.id],
                title: isEndOfMonth ? 'Betalingspåmindelse' : 'Ny Besked',
                body: notificationData.message,
                data: {
                  type: notificationData.type,
                  roomId: room.id
                }
              })
            });

            if (!response.ok) {
              throw new Error('Failed to send push notification');
            }
          } catch (err) {
            console.error('Error sending push notification:', err);
            // Don't throw here, we still want to continue with other notifications
          }
        }
      }));

      setSuccess('Beskeder sendt til alle beboere');
      setMessage('');
    } catch (err) {
      console.error('Error sending notifications:', err);
      setError('Fejl ved afsendelse af beskeder: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Send Beskeder
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Box sx={{ mb: 3 }}>
        <FormControlLabel
          control={
            <Switch
              checked={isEndOfMonth}
              onChange={(e) => setIsEndOfMonth(e.target.checked)}
              name="endOfMonth"
            />
          }
          label="Månedlig betalingspåmindelse"
        />
      </Box>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Besked"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isEndOfMonth}
        sx={{ mb: 3 }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {isEndOfMonth 
            ? 'Der vil blive sendt en påmindelse til alle beboere med deres aktuelle saldo.'
            : 'Skriv en besked der skal sendes til alle beboere.'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendNotification}
          disabled={loading || (!message.trim() && !isEndOfMonth)}
        >
          {loading ? <CircularProgress size={24} /> : 'Send Besked'}
        </Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" color="text.secondary">
        Push beskeder vil blive sendt til alle beboere der har installeret app'en og accepteret notifikationer.
        Andre beboere kan se beskederne når de åbner app'en.
      </Typography>
    </Paper>
  );
};

export default NotificationCenter;
