import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import User from "./component/User/User.jsx";
import UserDetails from "./component/UserDetails/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
     
    ]
  },
  {
    path: "/users",
    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    element: <User />,
  },
  {
    path:'/users/:userId',
    loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element : <UserDetails/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
