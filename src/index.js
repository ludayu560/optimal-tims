import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage/>
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={router} />
  </React.StrictMode>
);
