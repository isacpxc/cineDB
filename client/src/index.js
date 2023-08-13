import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Movie';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/movie",
    element: <Movie/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><RouterProvider router={router}/></React.StrictMode>);

