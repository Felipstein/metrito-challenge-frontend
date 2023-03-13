import React from 'react';
import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';

export const Routes: React.FC = () => {

  return (
    <ReactRoutes>
      <Route path='/' element={<h1>Home</h1>} />

      <Route path='/order/:orderId' element={<h1>Order Info</h1>} />

      <Route path='*' element={<Navigate to='/' />} />
    </ReactRoutes>
  );
};
