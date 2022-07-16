import { useSelector } from "react-redux";

function Slija() {
  const slija = useSelector((state) => state.api[1].city.city.country);
  console.log(slija);
  return (
    <div>
      Slija
      <p>min</p>
      <icon></icon>
      <p>max</p>
    </div>
  );
}

export default Slija;
