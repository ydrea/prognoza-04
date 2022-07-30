import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
  // useParams,
} from "react-router-dom";
//
import Nav from "./Nav";
//
import Form from "./Form";
import List from "./List";
import Fav from "./Fav";
import Four0Four from "../Four0Four";
import Detalji from "./Detalji";
import Table from "./Table";
//
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Form />}>
            <Route index element={<List />} />
            <Route path="fav" element={<Fav />} />
            <Route path="weather" element={<List />}>
              <Route path=":ime" element={<Detalji />} />
              <Route path=":ime/:dat" element={<Table />} />
            </Route>{" "}
          </Route>
          <Route path="*" element={<Four0Four />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
