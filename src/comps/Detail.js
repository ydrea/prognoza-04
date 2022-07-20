import { useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

function Detail({ id }) {
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list[0].weather[0].icon)
  );
  console.log(icons);
  const navigate = useNavigate();
  const params = useParams();
  const cityName = params.cityName;
  return (
    <div>
      Detail
      <div>5 days of {cityName}</div>
      <button onClick={navigate(-1)}>Natrag</button>
    </div>
  );
}

export default Detail;
