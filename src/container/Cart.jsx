import React from "react";
// firebase hooks user
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const Cart = () => {
  const [user] = useAuthState(auth);

  return (
    <div style={{ marginTop: "70px" }}>
      {/* Cart is empty if not login */}
      {!user ? (
        <>
          <h1>Cart is empty</h1>
          <p>Please login to see your cart</p>
        </>
      ) : (
        <>
          <h1>Cart is empty</h1>
          <p>Please add product to cart</p>
        </>
      )}
    </div>
  );
};

export default Cart;
