import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action";
import "../../style/products.scss";
import ProductItem from "./ProductItem";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(fetchProducts(data)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="products">
      <h1>Наша подборка для вас</h1>
      <div className="all_products">
        {products
          ? products.map(({ id, ...props }) => (
              <div className="card" key={id}>
                <ProductItem {...props} id={id} />
              </div>
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Products;
