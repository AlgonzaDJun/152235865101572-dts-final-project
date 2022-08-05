import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { addProduct, removeProduct } from "../redux/reducers/productSlice";
import SnackBar from "./SnackBar";
import { useDispatch } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Provider } from "react-redux";
import store from "../app/store";

const HandleCart = ({ cart }) => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const [openAlert, setOpenAlert] = useState(false);
  const [addCart, setAddCart] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleAddCart = (product) => {
    useDispatch(addProduct(product));
    setAddCart(true);
  };

  const handleRemoveCart = (product) => {
    dispatch(removeProduct(product));
    setAddCart(false);
  };

  return (
    <Provider store={store}>
      <div>
        {!addCart ? (
          <Button
            onClick={() => handleAddCart(cart)}
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
          >
            Add To Cart
          </Button>
        ) : (
          <Button
            onClick={() => handleRemoveCart(cart)}
            variant="contained"
            startIcon={<RemoveShoppingCartIcon />}
          >
            Remove From Cart
          </Button>
        )}
        <SnackBar
          openAlert={openAlert}
          handleClose={handleClose}
          message="Please Login to Add to Cart"
          severity="error"
        />
      </div>
    </Provider>
  );
};

export default HandleCart;
