import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import TabletLayout from './components/tablet/TabletLayout';
import RoomGrid from './components/tablet/RoomGrid';
import RoomPurchase from './components/tablet/RoomPurchase';
import PWAView from './components/PWAView';
import EnhancedPWAView from './components/EnhancedPWAView';
import AdminLayout from './components/admin/AdminLayout';
import './App.css'

// Device detection component
const DeviceRedirect = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      // Multiple checks for mobile devices
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileUserAgent = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isMobileWidth = window.innerWidth <= 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      console.log('Device Detection:', {
        userAgent,
        isMobileUserAgent,
        isMobileWidth,
        isTouchDevice,
        windowWidth: window.innerWidth,
        touchPoints: navigator.maxTouchPoints
      });

      // Consider a device mobile if it matches any mobile criteria
      const isMobile = isMobileUserAgent || (isMobileWidth && isTouchDevice);

      console.log('Final device decision:', isMobile ? 'Mobile' : 'Desktop');

      if (isMobile) {
        console.log('Redirecting to mobile view...');
        navigate('/enhanced-mobile', { replace: true });
      } else {
        console.log('Redirecting to desktop view...');
        navigate('/', { replace: true });
      }
      setIsChecking(false);
    };

    checkDevice();
  }, [navigate]);

  if (isChecking) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        textAlign: 'center'
      }}>
        <div>Indlæser...</div>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Omdirigerer til den rigtige visning...
        </div>
      </div>
    );
  }

  return null;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Device detection route */}
        <Route path="/detect" element={<DeviceRedirect />} />
        
        {/* Mobile routes */}
        <Route path="/PWAVIEW" element={<PWAView />} />
        <Route path="/enhanced-mobile" element={<EnhancedPWAView />} />
        
        {/* Admin route */}
        <Route path="/admin" element={<AdminLayout />} />
        
        {/* Tablet/Desktop routes */}
        <Route path="/" element={<TabletLayout />}>
          <Route index element={<RoomGrid />} />
          <Route path="room/:roomId" element={<RoomPurchase />} />
        </Route>
        
        {/* Default redirect to device detection */}
        <Route path="*" element={<Navigate to="/detect" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
