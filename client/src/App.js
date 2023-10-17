import "./App.css";
import AuthHome from "./Auth/AuthHome";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import axios from "axios";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import { Home, GameShowCase, MovieShowCase, BookShowCase } from "./Pages/Index";
axios.defaults.withCredentials = true;
//Possible TO-DO : move external media api's to server side rather than client side
function App() {
  const { initialGlobalLoader, isAuth } = useAuth();

  return (
    <div className="App">
      {isAuth && <Navbar />}
      {initialGlobalLoader ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/auth" element=<AuthHome />></Route>
          <Route
            path="/"
            element={
              isAuth ? (
                <div className="mt-20">
                  <Home />
                </div>
              ) : (
                <Navigate to="/auth"></Navigate>
              )
            }
          ></Route>
          <Route
            path="/game/:id"
            element={
              isAuth ? (
                <div className="mt-20">
                  <GameShowCase />
                </div>
              ) : (
                <Navigate to="/auth"></Navigate>
              )
            }
          ></Route>
          <Route
            path="/movie/:id"
            element={
              isAuth ? (
                <div className="mt-20">
                  <MovieShowCase />
                </div>
              ) : (
                <Navigate to="/auth"></Navigate>
              )
            }
          ></Route>
          <Route
            path="/book/:title"
            element={
              isAuth ? (
                <div className="mt-20">
                  <BookShowCase />
                </div>
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
