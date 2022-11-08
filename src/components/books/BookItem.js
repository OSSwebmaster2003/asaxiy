import React from "react";
import { Link } from "react-router-dom";

function BookItem({ image, title, subtitle }) {
  return (
    <li>
      <Link>
        <img src={image} alt="book" />
        <div className="info">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </Link>
    </li>
  );
}

export default BookItem;
