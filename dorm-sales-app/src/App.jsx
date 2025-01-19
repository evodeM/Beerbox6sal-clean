import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TabletLayout from './components/tablet/TabletLayout';
import RoomGrid from './components/tablet/RoomGrid';
import RoomPurchase from './components/tablet/RoomPurchase';
import './App.css'

const App = () => {
  return (
    <Router basename="/dorm-sales-app">
      <Routes>
        <Route path="/" element={<TabletLayout />}>
          <Route index element={<RoomGrid />} />
          <Route path="room/:roomId" element={<RoomPurchase />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
