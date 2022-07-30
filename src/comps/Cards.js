import { useDispatch, useSelector } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";
import { useNavigate, Outlet, Link, useParams } from "react-router-dom";
//
function Cards({ dat, ime, id, icon, min, max }) {
  const iconurl = `https://openweathermap.org/img/w/${icon}.png`;
  //
  // const { ime, dat } = useParams();
  console.log(ime.ime, dat);
  //
  return (
    <div className="card">
      <span className="command">
        <Link className="link" to={`/cards/${ime.ime}/${dat}`}>
          {dat}
        </Link>
      </span>

      <ul className="ulist">
        <li>Min: {min}</li>
        <li>{<img src={iconurl} alt={icon} />}</li>
        <li>Max: {max}</li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Cards;
