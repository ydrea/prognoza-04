import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

function Detail() {
  //drill
  const take5 = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt))
  );
  console.log(take5);
  //
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.weather[0].icon))
  );
  console.log(icons);
  //

  //route
  const params = useParams();
  console.log(params);
  const ime = params.ime;
  //
  return (
    <div>
      Detail
      <div>5 days of {ime}</div>
      {take5}, {icons}
    </div>
  );
}

export default Detail;
