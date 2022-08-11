import {
  Button,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// firebase hooks user
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import { auth } from "../config/firebase";
import { removeProduct, selectProduct } from "../redux/reducers/productSlice";
import ClearIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector(selectProduct);
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  const handleRemoveCart = (product) => {
    dispatch(removeProduct(product));
  };

  const EmptyCart = () => {
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h4">Cart is empty</Typography>
          <Typography variant="body1">
            Please Login or add product to cart
          </Typography>
        </Grid>
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
  };

  const CartItems = (cartItem) => {
    return (
      <div key={cartItem.id}>
        <Grid
          container
          spacing={1}
          sx={{ backgroundColor: "background.paper", width: "100%" }}
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

  const button = () => {
    return (
      <div>
        <Stack direction="row" spacing={2}>
          <NavLink to="/checkout">
            <Button
              variant="contained"
              endIcon={<ShoppingCartCheckoutTwoToneIcon />}
              size="large"
            >
              Checkout
            </Button>
          </NavLink>
        </Stack>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "90px", marginBottom: "97vh" }}>
      {/* Cart is empty if not login */}
      {user && state.length !== 0 ? (
        // map cart and render button
        <div>
          <h1>Cart</h1>
          <Grid container>
            <Grid item xs={12} md={12}>
              {state.map((cartItem) => CartItems(cartItem))}
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 5,
              }}
            >
              {button()}
            </Grid>
          </Grid>
        </div>
      ) : // state.map(CartItems)
      !user || state.length === 0 ? (
        <EmptyCart />
      ) : (
        <PleaseLogin />
      )}
    </div>
  );
};

export default Cart;
