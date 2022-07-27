import { useDispatch, useSelector } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";
import { useNavigate, Outlet, Link, useParams } from "react-router-dom";
//
function Card({ id, ime, fav, icon, min, max }) {
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const params = useParams();
  // console.log(params);
  // const imeGrada = params.imeGrada;

  const handleFavCheck = () => {
    dispatch(
      toggleFav({
        id: id,
        fav: !fav,
      })
    );
  };

  const handleDeleteIt = () => {
    dispatch(deleteIt({ id: id }));
  };
  const iconurl = `https://openweathermap.org/img/w/${icon}.png`;
  return (
    <div className="card">
      <span className="command">
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />
        <Link className="link" to={`/card/${ime}`}>
          {ime}
        </Link>
        <button onClick={handleDeleteIt}>X</button>
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

export default Card;
