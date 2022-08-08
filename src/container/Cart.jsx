import { Button, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
// firebase hooks user
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { removeProduct, selectProduct } from "../redux/reducers/productSlice";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const state = useSelector(selectProduct);

  const [user] = useAuthState(auth);

  const handleRemoveCart = (product) => {
    dispatch(removeProduct(product));
  };

  const EmptyCart = () => {
    return (
      <div>
        <h1>Cart is empty</h1>
        <p>Please Login or add product to cart</p>
      </div>
    );
  };

  const PleaseLogin = () => {
    return (
      <div>
        <h1>Please Login</h1>
        <p>Please Login to add product to cart</p>
      </div>
    );
  }

  const CartItems = (cartItem) => {
    return (
      <div key={cartItem.id}>
        <Grid
          container
          spacing={1}
          sx={{ backgroundColor: "background.paper" }}
        >
          <Grid item xs={12} md={4} m={4}>
            <CardMedia>
              <img
                src={cartItem.image}
                // src="https://placekitten.com/200/300"
                alt={cartItem.name}
                height={200}
                width={300}
                style={{ margin: "auto" }}
              />
            </CardMedia>
          </Grid>
          <Grid item xs={12} md={5} m={4}>
            <Typography variant="h5">
              {cartItem.title}
              {/* Kucing Kucing Kucing */}
            </Typography>
            <Typography variant="body1">
              ${cartItem.price}
              {/* Rp. 100.000 */}
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => handleRemoveCart(cartItem)}
              sx={{ float: "right" }}
              size="large"
            >
              <ClearIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "90px", marginBottom: "97vh" }}>
      {/* Cart is empty if not login */}
      { user && state.length !== 0 ? (
        state.map(CartItems)
      ) : !user || state.length === 0 ? (
        <EmptyCart />
      ) : <PleaseLogin /> }
    </div>
  );
};

export default Cart;
