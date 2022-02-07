import React from "react";
import Product from "../Product/Product";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h4 className="pl-title">Sáng tạo - Kiên trì - Cẩn thận</h4>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          praesentium reprehenderit magnam est nostrum consequatur, ratione in.
          Repudiandae fugit eligendi, quibusdam ut cum voluptatibus eaque
          pariatur, impedit hic inventore adipisci.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
