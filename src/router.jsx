import { createBrowserRouter } from "react-router-dom";

import Index from "./components/Index";
import HomePage from "./components/pages/Home";
import RegisterPage from "./components/pages/Register";
import LoginPage from "./components/pages/Login";
import { lazy } from "react";
const Protected = lazy(() => import("./components/pages/Protected"));
import ProductRouter from "./components/modules/product/router";

//https://www.youtube.com/watch?v=-Y8brhQKvtA
const router = createBrowserRouter([
  {
    element: <Index />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => [1, 2, 3],
      },
      {
        path: "protected",
        Component: Protected,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "*",
        element: <h1>Error 404</h1>,
      },
      ProductRouter,
    ],
  },
]);
export default router;
/*
import React, { useContext, useReducer } from 'react';

// Counter component to display and update the local count
const Counter = () => {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Local Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};





*/