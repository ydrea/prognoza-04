import { useSelector } from "react-redux";

function Slija() {
  const slija = useSelector(
    (state) => state.api[0].city.list[0].weather[0].icon
  );
  console.log(slija);
  return (
    <div>
      <img src={`https://openweathermap.org/img/wn/${slija}.png`} />
    </div>
  );
}

export default Slija;
