import React from "react";
import Itemcard from "./Itemcard";
import { useState, useEffect } from "react";
import { PRODUCT_API } from "../utils/constants";

const Body = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const data = await fetch(PRODUCT_API);
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products) return null;
  console.log(products[3]);

  return (
    <div>
      <div className="mainContainer">
        <div className="header">
          <h1 className="header1">4700 BC</h1>
          <h2 className="header2">GOURMET FOOD</h2>
        </div>

        <div className="itemCard-Container">
          {products.map((product) => {
            return <Itemcard key={product.id} data={product} />;
          })}
        </div>

        <div className="bottom">
          <div>
            <button className="view">VIEW ALL</button>
          </div>

          <div className="powered">POWERED BY</div>

          <div className="logo-container">
            <img
              className="logo"
              src="https://cdn.jhattse.com/public/assets/noimage.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
