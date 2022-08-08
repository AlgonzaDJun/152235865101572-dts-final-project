import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { addProduct, removeProduct, selectProduct } from "../redux/reducers/productSlice";
import SnackBar from "./SnackBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Provider } from "react-redux";
import store from "../app/store";

const HandleCart = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const [addCart, setAddCart] = useState(false);
  
  const [openAlert, setOpenAlert] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleAddCart = (product) => {
    dispatch(addProduct(product));
    setAddCart(true);
  };

  const handleRemoveCart = (product) => {
    dispatch(removeProduct(product));
    setAddCart(false);
  };

  const cart = useSelector(selectProduct);

  return (
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
  );
};

export default HandleCart;
