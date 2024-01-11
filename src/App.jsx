import { Fragment } from 'react';

import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
