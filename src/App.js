import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Dragons from './components/Dragons';
import { fetchMissions } from './redux/missions/missionsSlice';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchDragons } from './redux/dragons/dragonsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/dragons" element={<Dragons />} />
        <Route exact path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;