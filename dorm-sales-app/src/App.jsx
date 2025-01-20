import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TabletLayout from './components/tablet/TabletLayout';
import RoomGrid from './components/tablet/RoomGrid';
import RoomPurchase from './components/tablet/RoomPurchase';
import PWAView from './components/PWAView';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PWAVIEW" element={<PWAView />} />
        <Route path="/" element={<TabletLayout />}>
          <Route index element={<RoomGrid />} />
          <Route path="room/:roomId" element={<RoomPurchase />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
