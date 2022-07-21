import { useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  //
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list[0].weather[0].icon)
  );
  console.log(icons);
  //
  const navigate = useNavigate();
  //
  const params = useParams();
  console.log(params);
  const imeGrada = params.imeGrada;
  return (
    <div>
      Detail
      <div>5 days of {imeGrada}</div>
      <button onClick={navigate(-1)}>Natrag</button>
    </div>
  );
}

export default Detail;
