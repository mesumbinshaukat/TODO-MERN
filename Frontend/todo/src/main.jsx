import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import App from "./App.jsx";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import Profile from "./Pages/Profile";
const RouterWrapper = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
  
    useEffect(() => {
      const handleStorageChange = () => {
        setToken(localStorage.getItem("token"));
      };
  
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);
  
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {token && token !== "undefined" ? (
            <>
              <Route path="todo" element={<Todo />} />
              <Route path="profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </>
          )}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  };
  
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterWrapper/>
  </StrictMode>
);
