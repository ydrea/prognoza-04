import { useSelector } from "react-redux";

function Slija() {
  const slija = useSelector(
    (state) => state.api[0].city.list[0].weather[0].icon
  );
  console.log(slija);
  return (
    <div>
      Slija
      <p>min</p>
      <icon>{slija}</icon>
      <p>max</p>
    </div>
  );
}

export default Slija;
