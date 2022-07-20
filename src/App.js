import "./styles/style.css";
// import "./App.css";
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  // Outlet,
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
              <NavLink className="link" to="/">
                Weather App
              </NavLink>
              <NavLink className="link" to="favorites">
                Omiljeni
              </NavLink>
            </div>
          )}
          {user.password ? (
            <Routes>
              <Route path="/" element={<Form />}>
                <Route index="list" element={<List />} />
                {/* <Route path="favorites" element={<Favorites />} /> */}
              </Route>
              {/* <Route path="/weather" /> */}

              <Route path="/favorites" element={<Favorites />} />
              <Route path="/card" element={<Card />}>
                <Route path=":cityName" element={<Detail />} />
              </Route>
              <Route path="*" element={<Four0Four />} />
            </Routes>
          ) : null}
          <List />
        </BrowserRouter>
      </div>
    </div>
  );
}
