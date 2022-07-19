import { useSelector } from "react-redux";
const iiii = [];

function Slija({ id }) {
  const icons = useSelector((state) =>
    state.api.map((i) => i.city.list[0].weather[0].icon)
  );
  console.log(icons);

  const icon = icons.pop();
  console.log(icon);

  return (
    <div>
      {/* {icons.slice(0).map((e, id) => {
        return (
          <img src={`https://openweathermap.org/img/wn/${e}.png`} key={id} />
        );
      })} */}
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
    </div>
  );
}

export default Slija;
