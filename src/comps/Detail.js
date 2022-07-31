import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Cards from "./Cards";
import Table from "./Table";
function Detail() {
  //drill
  const lista = useSelector((state) => state.api.map((i) => i.city.list));
  console.log("lista", lista);
  //just Dates
  const takeDate = useSelector((state) =>
    state.api.map((i) => i.city.list.map((ii) => ii.dt_txt.slice(1, 10)))
  );
  console.log("datumi", takeDate);

  //route
  const ime = useParams();
  console.log("route", ime);
  // //
  return (
    <div>
      <div className="list-container">
        {
          //
          lista[0]
            .filter((i, index) => {
              return index % 8 === 0;
            })
            .map((i) => {
              return (
                <Cards
                  className="cards"
                  key={i.id}
                  ime={ime}
                  id={i.id}
                  dat={i.dt_txt.slice(5, 10)}
                  fav={i.fav}
                  icon={i.weather[0].icon}
                  min={i.main.temp_min}
                  max={i.main.temp_max}
                />
              );
            })

          //
        }
      </div>
      <Outlet />
      {/* <Table /> */}
    </div>
  );
}

export default Detail;
