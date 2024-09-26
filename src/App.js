import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Props from './pages/props';
import Counter from './pages/counter';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Props />} />
            <Route path="/counter" element={<Counter />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
