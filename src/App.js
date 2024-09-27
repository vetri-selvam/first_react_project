import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/counter" element={<Counter />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
