import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabletLayout from './components/tablet/TabletLayout';
import RoomGrid from './components/tablet/RoomGrid';
import RoomPurchase from './components/tablet/RoomPurchase';
import './App.css'

function App() {
  return (
    <Router>
      <TabletLayout>
        <Routes>
          <Route path="/" element={<RoomGrid />} />
          <Route path="/room/:roomId" element={<RoomPurchase />} />
        </Routes>
      </TabletLayout>
    </Router>
  );
}

export default App;
