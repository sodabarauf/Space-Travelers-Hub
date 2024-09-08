import React from 'react'; // No blank line before this
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dragons from './components/Dragons';
import DragonsProfile from './components/DragonsProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dragons />} />
          <Route path="/profile" element={<DragonsProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
