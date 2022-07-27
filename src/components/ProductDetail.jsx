import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DATA from "../Data";
import { add_Item, del_Item } from "./redux/reducers/itemSlice";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const proID = useParams();
  const proDetail = DATA.filter((pro) => pro.id == proID.id);
  const product = proDetail[0];

    const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn == "Add to Cart") {
      dispatch(add_Item(product))
      setCartBtn("Remove from Cart");
    } else {
      dispatch(del_Item(product))
      setCartBtn("Add to Cart");
    }
  };

  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt="" height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">{product.price}</h2>
            <p>{product.desc}</p>
            <button
              onClick={() => {
                handleCart(product);
              }}
              className="btn-outline-primary btn"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
