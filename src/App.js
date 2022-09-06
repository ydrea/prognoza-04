import "./styles/style.css";
import { Link, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//routes
import Card from "./comps/Card";
import Cards from "./comps/Cards";
import Login from "./comps/Login";
import Logout from "./comps/Logout";
import Detail from "./comps/Detail";
import Favorites from "./comps/Favorites";
import Four0Four from "./comps/Four0Four";
//comps
import Form from "./comps/Form";
import List from "./comps/List";

//redux
import { useSelector } from "react-redux";
import Table from "./comps/Table";
import { DarkToggle } from "./comps/Switch";
//
export default function App() {
  const user = useSelector((state) => state.user);
  const api = useSelector((state) => state.api);
  //
  //
  return (
    <div className="app">
      <header className="header">
        {!user.email ? <Login /> : <Logout />}
        <DarkToggle />
      </header>

      <div className="form">
        <BrowserRouter>
          {!user.email ? (
            <div className="instruction">Unesi korisničke podatke</div>
          ) : (
            <div className="nav">
              <Link className="link" to="weather">
                Weather
              </Link>
              <Link className="link" to="favorites">
                Omiljeni
              </Link>
            </div>
          )}
          {user.password ? (
            <Routes>
              <Route path="/" element={<Form />}>
                <Route index element={<List />} />
                <Route path="weather" element={<List />} />
              </Route>
              <Route path="favorites" element={<Favorites />} />
              <Route path="card" element={<Card />} />
              <Route path="card/:ime" element={<Detail />} />
              <Route path="cards" element={<Cards />} />
              <Route path="cards/:ime/:dat" element={<Table />} />
              <Route path="*" element={<Four0Four />} />
            </Routes>
          ) : null}
          {api.length !== 0 ? <Outlet /> : null}
        </BrowserRouter>
      </div>
    </div>
  );
}
