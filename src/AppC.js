import "./styles/style.css";
// import "./App.css";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  // useParams,
} from "react-router-dom";
//routes
import Card from "./comps/Card";
import Login from "./comps/Login";
import Logout from "./comps/Logout";
import Detail from "./comps/Detail";
import Favorites from "./comps/Favorites";
import Four0Four from "./comps/Four0Four";
//comps
import Form from "./comps/Form";
import List from "./comps/List";
// import Flat from "./json/Flat";

//redux
import { useSelector } from "react-redux";
import Table from "./comps/Table";
//
export default function App() {
  const user = useSelector((state) => state.user);
  const api = useSelector((state) => state.api);
  //
  // let { cityName } = useParams;
  // console.log(cityName);
  //
  return (
    <div className="app">
      <header className="header">{!user.email ? <Login /> : <Logout />}</header>

      <div className="form">
        <BrowserRouter>
          {!user.email ? (
            <div className="instruction">Unesi korisničke podatke</div>
          ) : (
            <div className="nav">
              <Link className="link" to="list">
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
                <Route path="favorites" element={<Favorites />} />
                <Route path="list" element={<List />} />
              </Route>
              <Route path="card" element={<Card />} />
              <Route path="card/:ime" element={<Detail />} />
              <Route path="card/:ime/:dan" element={<Table />} />

              <Route path="*" element={<Four0Four />} />
            </Routes>
          ) : null}
          {api.length !== 0 ? <Outlet /> : null}
        </BrowserRouter>
      </div>
    </div>
  );
}
