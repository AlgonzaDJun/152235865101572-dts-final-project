import React from "react";
// firebase hooks user
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { selectProduct } from "../redux/reducers/productSlice";

// functional component cartItem
const CartItem = () => {
  const state = useSelector(selectProduct);
  console.log(state);
};

const Cart = () => {
  const state = useSelector(selectProduct);
  console.log(state);

  const [user] = useAuthState(auth);

  const EmptyCart = () => {
    return (
      <div>
        <h1>Cart is empty</h1>
        <p>Please add product to cart</p>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "70px", marginBottom: "97vh" }}>
      {/* Cart is empty if not login */}
      {!user ? (
        <>
          <h1>Cart is empty</h1>
          <p>Please login to see your cart</p>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
