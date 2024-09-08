import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dragons from './components/Dragons';
import DragonsProfile from './components/DragonsProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dragons />} />
        <Route path="/profile" element={<DragonsProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
