import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import About from './Aplication/components/about.jsx';
import Social from './Aplication/components/social.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/social',
    element : <Social/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
      <App/>
  </StrictMode>
)
