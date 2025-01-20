import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress
} from '@mui/material';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const AdminSettings = () => {
  const [mobilepayLink, setMobilepayLink] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settingsRef = doc(db, 'settings', 'admin');
        const settingsSnap = await getDoc(settingsRef);
        
        if (settingsSnap.exists()) {
          setMobilepayLink(settingsSnap.data().mobilepayLink || '');
        }
      } catch (error) {
        console.error('Error loading settings:', error);
        setError('Kunne ikke indlæse indstillinger');
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  const handleSave = async () => {
    if (!mobilepayLink.trim()) {
      setError('MobilePay link kan ikke være tomt');
      return;
    }

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const settingsRef = doc(db, 'settings', 'admin');
      await updateDoc(settingsRef, {
        mobilepayLink: mobilepayLink.trim(),
        lastUpdated: new Date()
      });
      
      setSuccess('Indstillinger gemt');
    } catch (error) {
      console.error('Error saving settings:', error);
      setError('Kunne ikke gemme indstillinger');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Admin Indstillinger
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          MobilePay Link
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Dette link bruges når beboere skal betale via MobilePay. 
          Formatet skal være et gyldigt MobilePay-link.
        </Typography>
        <TextField
          fullWidth
          label="MobilePay Link"
          value={mobilepayLink}
          onChange={(e) => setMobilepayLink(e.target.value)}
          placeholder="f.eks. https://mobilepay.dk/box/..."
          sx={{ mb: 3 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <CircularProgress size={24} /> : 'Gem Ændringer'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AdminSettings;
