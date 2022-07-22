import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import Table from "./Table";
function Detail() {
  //  //drill

  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log(lista);
  // dates
  const take5 = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt))
  );
  console.log(take5);
  //icons
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  );
  console.log(icons);
  //

  //route
  const params = useParams();
  console.log(params);
  const ime = params.ime;
  // const dan = params.ime.dan;
  // console.log(dan);
  //
  return (
    <div>
      Detail
      <div>
        5
        {lista[0].map((i) => (
          <ul>
            <li key={i.dt}>{i.dt}</li>
          </ul>
        ))}
        {/* <Link to={`/card/${ime}/${dan}`}>
          {dan} */}
        of {ime}
        {/* </Link> */}
      </div>
      {take5}, {icons}
      <Outlet />
    </div>
  );
}

export default Detail;
