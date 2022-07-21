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
import Home from "./Home";
import Form from "./Form";
import Conform from "./Conform";
import List from "./List";
import Fav from "./Fav";
import Four0Four from "../Four0Four";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Four0Four />} />
          <Route path="conform" element={<Conform />} />
          <Route path="form" element={<Form />}>
            <Route path="list" element={<List />} />
            <Route path="fav" element={<Fav />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
