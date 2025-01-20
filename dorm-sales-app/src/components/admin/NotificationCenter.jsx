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
  CircularProgress
} from '@mui/material';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const NotificationCenter = () => {
  const [message, setMessage] = useState('');
  const [isEndOfMonth, setIsEndOfMonth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendNotification = async () => {
    if (!message.trim()) {
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

      // Create notification for each room
      await Promise.all(rooms.map(async (room) => {
        const notification = {
          roomId: room.id,
          message: isEndOfMonth 
            ? `Hej ${room.occupantName || 'beboer'}! Din saldo er ${room.balance} kr. Venligst betal inden månedens udgang.`
            : message,
          timestamp: new Date(),
          read: false,
          type: isEndOfMonth ? 'payment' : 'announcement'
        };

        await addDoc(collection(db, 'notifications'), notification);
      }));

      setSuccess('Beskeder sendt til alle beboere');
      setMessage('');
    } catch (err) {
      setError('Fejl ved afsendelse af beskeder');
      console.error('Error sending notifications:', err);
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
    </Paper>
  );
};

export default NotificationCenter;
