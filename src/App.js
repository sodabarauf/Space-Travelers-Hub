import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import { fetchMissions } from './redux/missions/missionsSlice';
import { fetchRockets } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
