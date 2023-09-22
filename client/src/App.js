import { useState } from "react";
import "./App.css";
import AuthHome from "./Auth/AuthHome";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

function App() {
  const { isAuth } = useAuth();
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route
          path="/auth"
          element={isAuth ? <Navigate to="/"></Navigate> : <AuthHome />}
        ></Route>
        <Route
          path="/"
          element={isAuth ? <div>Hello</div> : <Navigate to="/auth"></Navigate>}
        ></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
