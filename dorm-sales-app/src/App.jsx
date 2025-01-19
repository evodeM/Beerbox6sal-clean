import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabletLayout from './components/tablet/TabletLayout';
import RoomGrid from './components/tablet/RoomGrid';
import './App.css'

function App() {
  return (
    <Router>
      <TabletLayout>
        <Routes>
          <Route path="/" element={<RoomGrid />} />
          {/* Other routes will be added later */}
        </Routes>
      </TabletLayout>
    </Router>
  );
}

export default App;
