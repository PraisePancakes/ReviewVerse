import { useState } from "react";
import "./App.css";
import AuthHome from "./Auth/AuthHome";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/auth"
          element={isAuth ? <Navigate to="/"></Navigate> : <AuthHome />}
        ></Route>
        <Route
          path="/"
          element={isAuth ? <div>Hello</div> : <Navigate to="/auth"></Navigate>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
