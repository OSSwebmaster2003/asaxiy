import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourites } from "../redux/action";
import "../style/favourites.scss";

function Favourites() {
  const { favourites } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="favourites">
      {favourites.length > 0 ? (
        favourites.map((item) => (
          <div className="card" key={item.id}>
            <div className="for_image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="for_info">
              <Link>{item.title}</Link>
              <button>{item.category}</button>
            </div>
            <div className="for_pricing">
              <h2>${item.price}</h2>
              <h3>${Math.floor(item.price / 12)}/12 month</h3>
            </div>
            <div className="for_actions">
              <button className="add_to_cart">добавить в корзину</button>
              <button
                className="delete"
                onClick={() => dispatch(removeFavourites(item.id))}
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>Nothing here</h1>
      )}
    </div>
  );
}

export default Favourites;
