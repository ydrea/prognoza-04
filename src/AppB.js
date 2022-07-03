// import "./CSS/style.css";
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
//routes
import Login from "./comps/Login";
import Logout from "./comps/Logout";
import Detail from "./comps/Detail";
import Favorites from "./comps/Favorites";
//comps
import Form from "./comps/Form";
import List from "./comps/List";
//redux
import { useSelector } from "react-redux";
//
export default function App() {
  const user = useSelector((state) => state.user);
  const api = useSelector((state) => state.api);
  console.log(api);
  return (
    <div className="any">
      <header className="header">{!user.email ? <Login /> : <Logout />}</header>

      <div className="form">
        <BrowserRouter>
          {!user.email ? (
            <div className="instruction">Unesi korisničke podatke</div>
          ) : (
            <div className="nav">
              <Link className="link" to="/">
                Weather App
              </Link>
              <Link className="link" to="/favorites">
                Omiljeni
              </Link>
            </div>
          )}
          {user.password ? (
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          ) : null}
        </BrowserRouter>
      </div>
    </div>
  );
}
