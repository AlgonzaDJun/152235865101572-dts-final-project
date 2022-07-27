import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItem } from "../redux/reducers/itemSlice";

const CartBtn = () => {
  const state = useSelector(selectItem)

  return (
    <>
      <NavLink to="/" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
