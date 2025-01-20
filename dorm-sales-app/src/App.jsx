import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import TabletLayout from './components/tablet/TabletLayout';
import RoomGrid from './components/tablet/RoomGrid';
import RoomPurchase from './components/tablet/RoomPurchase';
import PWAView from './components/PWAView';
import EnhancedPWAView from './components/EnhancedPWAView';
import './App.css'

// Device detection component
const DeviceRedirect = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      navigate('/enhanced-mobile');
    } else {
      navigate('/');
    }
    setIsChecking(false);
  }, [navigate]);

  if (isChecking) {
    return <div>Loading...</div>;
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
