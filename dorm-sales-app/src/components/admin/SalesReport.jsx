import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Alert,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import DownloadIcon from '@mui/icons-material/Download';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const SalesReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [reportData, setReportData] = useState(null);

  const generateReport = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      // Get current month's start and end dates
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

      // Query purchases for the current month
      const purchasesRef = collection(db, 'purchases');
      const q = query(
        purchasesRef,
        where('timestamp', '>=', Timestamp.fromDate(startOfMonth)),
        where('timestamp', '<=', Timestamp.fromDate(endOfMonth))
      );

      const querySnapshot = await getDocs(q);
      const purchases = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Process purchases into report data
      const summary = {
        totalSales: 0,
        productSales: {},
        roomSales: {}
      };

      purchases.forEach(purchase => {
        // Update total sales
        summary.totalSales += purchase.amount;

        // Update product sales
        if (!summary.productSales[purchase.productName]) {
          summary.productSales[purchase.productName] = {
            quantity: 0,
            total: 0
          };
        }
        summary.productSales[purchase.productName].quantity += 1;
        summary.productSales[purchase.productName].total += purchase.amount;

        // Update room sales
        if (!summary.roomSales[purchase.roomId]) {
          summary.roomSales[purchase.roomId] = {
            quantity: 0,
            total: 0
          };
        }
        summary.roomSales[purchase.roomId].quantity += 1;
        summary.roomSales[purchase.roomId].total += purchase.amount;
      });

      setReportData(summary);
      setSuccess('Rapport genereret');
    } catch (err) {
      setError('Fejl ved generering af rapport');
      console.error('Error generating report:', err);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    if (!reportData) return;

    // Prepare CSV content
    const lines = [];
    
    // Header
    lines.push('Rapport for ' + new Date().toLocaleDateString('da-DK', { month: 'long', year: 'numeric' }));
    lines.push('');
    
    // Product sales
    lines.push('Produkt Salg');
    lines.push('Produkt,Antal,Total (DKK)');
    Object.entries(reportData.productSales).forEach(([product, data]) => {
      lines.push(`${product},${data.quantity},${data.total}`);
    });
    lines.push('');
    
    // Room sales
    lines.push('Værelse Salg');
    lines.push('Værelse,Antal Køb,Total (DKK)');
    Object.entries(reportData.roomSales).forEach(([room, data]) => {
      lines.push(`${room},${data.quantity},${data.total}`);
    });
    lines.push('');
    
    // Total
    lines.push(`Total Salg,${reportData.totalSales} DKK`);

    // Create and download file
    const csvContent = lines.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `salgsrapport_${new Date().toISOString().slice(0, 7)}.csv`;
    link.click();
  };

  const handleMonthlyReset = async () => {
    if (!window.confirm('Er du sikker på at du vil nulstille alle saldi? Denne handling kan ikke fortrydes.')) {
      return;
    }

    setLoading(true);
    setError('');
    try {
      const roomsRef = collection(db, 'rooms');
      const roomsSnapshot = await getDocs(roomsRef);

      await Promise.all(roomsSnapshot.docs.map(async (roomDoc) => {
        const roomRef = doc(db, 'rooms', roomDoc.id);
        await updateDoc(roomRef, {
          balance: 0,
          lastReset: Timestamp.now()
        });
      }));

      setSuccess('Alle saldi er nulstillet');
    } catch (err) {
      setError('Fejl ved nulstilling af saldi');
      console.error('Error resetting balances:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">
          Månedlig Rapport
        </Typography>
        <Box>
          <Button
            variant="outlined"
            color="error"
            startIcon={<RestartAltIcon />}
            onClick={handleMonthlyReset}
            disabled={loading}
            sx={{ mr: 2 }}
          >
            Nulstil Saldi
          </Button>
          <Button
            variant="contained"
            onClick={generateReport}
            disabled={loading}
          >
            Generer Rapport
          </Button>
        </Box>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {reportData && (
        <Box>
          <TableContainer sx={{ mb: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Produkt</TableCell>
                  <TableCell align="right">Antal</TableCell>
                  <TableCell align="right">Total (DKK)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(reportData.productSales).map(([product, data]) => (
                  <TableRow key={product}>
                    <TableCell>{product}</TableCell>
                    <TableCell align="right">{data.quantity}</TableCell>
                    <TableCell align="right">{data.total}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {Object.values(reportData.productSales).reduce((sum, data) => sum + data.quantity, 0)}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    {reportData.totalSales}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            onClick={downloadCSV}
            fullWidth
          >
            Download CSV
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default SalesReport;
