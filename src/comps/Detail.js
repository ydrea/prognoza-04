import React from "react";
import { useDispatch } from "react-redux";
import { deleteIt, toggleFav } from "../redux/apiSlice";

export default function Detail({ id, city, fav }) {
  console.log(city);

  const dispatch = useDispatch();

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

  return (
    // <div className='card'>
    //   <div className='card-inner'>
    //     <div className='card-front'>
    //       <img src={item.img} alt='' />
    //     </div>
    //     <div className='card-back'>
    //       <h1>{item.name}</h1>
    //       <ul>
    //         <li>
    //           <strong>Actor Name:</strong> {item.portrayed}
    //         </li>
    //         <li>
    //           <strong>Nickname:</strong> {item.nickname}
    //         </li>
    //         <li>
    //           <strong>Birthday:</strong> {item.birthday}
    //         </li>
    //         <li>
    //           <strong>Status:</strong> {item.status}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <li className={`list-item ${fav && "list-item-success"}`}>
      <span>
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />
        {city}
      </span>
      <button onClick={handleDeleteIt}>X</button>
    </li>
  );
}
