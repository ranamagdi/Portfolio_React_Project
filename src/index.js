import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

