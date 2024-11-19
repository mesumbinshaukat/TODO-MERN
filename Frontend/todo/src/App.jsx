import React, {useState, useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const redirect = useNavigate()


useEffect(() => {
  if(token){
    localStorage.setItem("token", token)
  }else{
    localStorage.removeItem("token")
  }
  
}, [token])

useEffect(() => {
  if (!token && (window.location.pathname === "/todo" || window.location.pathname === "/profile")) {
    redirect("/login")
  }
}, [token, redirect])

  return (
    <>
      <Header token={token} setToken={setToken}/>

      <Outlet context={{token, setToken}}/>
    </>
  );
};

export default App;
