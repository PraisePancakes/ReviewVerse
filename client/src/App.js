import "./App.css";
import AuthHome from "./Auth/AuthHome";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import axios from "axios";
import Loading from "./Components/Loading";

axios.defaults.withCredentials = true;
function App() {
  const { user, loading, isAuth } = useAuth();
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/auth" element=<AuthHome />></Route>
          <Route
            path="/"
            element={
              isAuth ? (
                <div>Hello {user?.username}</div>
              ) : (
                <Navigate to="/auth"></Navigate>
              )
            }
          ></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
        </Routes>
      )}{" "}
    </div>
  );
}

export default App;
