import React from "react";
import Banner from "../components/banner/Banner";
import Products from "../components/products/Products";
import Sidebar from "../components/sidebar/Sidebar";
import "../style/home.scss";

function Home(props) {
  return (
    <div className="home">
      <Banner />
      <div className="main_part">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default Home;
