import React from "react";
import Books from "../books/Books";
import "./sidebar.scss";

function Sidebar(props) {
  return (
    <aside>
      <header>
        <p>книги</p>
        <img
          src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png"
          alt="asaxiy-books"
        />
      </header>
      <Books />
    </aside>
  );
}

export default Sidebar;
