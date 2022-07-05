import React from "react";

export default function Detail({ id, grad, fav }) {
  console.log(grad);

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
    <li className={`list-item ${fav && "list-item-success"}`}>
      <span>
        <input type="checkbox" checked={fav} onChange={handleFavCheck} />
        {grad}
      </span>
    </li>
  );
}

export default Detail;
