import React from "react";
import LowHeader from "./LowHeader";
import TopHeader from "./TopHeader";

function Header(props) {
  return (
    <div>
      <header>
        <TopHeader />
        <LowHeader />
      </header>
    </div>
  );
}

export default Header;
