import React, { useEffect, useState } from "react";
import {
  useGetByCategoryQuery,
  useGetProductByIdQuery,
} from "../services/fakeStoreApi";
import { useParams } from "react-router-dom";
import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Skeleton from "@material-ui/lab/Skeleton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  selectProduct,
} from "../redux/reducers/productSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setProduct(data);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  const dispatch = useDispatch();
  const cart = useSelector(selectProduct);

  const [addCart, setAddCart] = useState(false);

  const handleAddCart = (product) => {
    dispatch(addProduct(product));
    setAddCart(!addCart);
  };

  const handleRemoveCart = (product) => {
    dispatch(removeProduct(product));
    setAddCart(!addCart);
  };

  const [user] = useAuthState(auth);

  //  skeletonPage
  const SkeletonPage = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              m: 3,
              maxHeight: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{
                margin: "auto",
                maxWidth: "100%",
              }}
            >
              <Skeleton variant="rectangular" width={500} height={350} />
            </CardMedia>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ m: 2 }}>
            <Typography variant="h4">
              <Skeleton variant="text" width={500} />
            </Typography>
            <Typography variant="h5" mb={5}>
              <Skeleton variant="text" width={500} />
            </Typography>
            <Typography variant="body" sx={{ textAlign: "justify" }}>
              <Skeleton variant="rectangular" width={500} height={200} />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const ShowProduct = () => {
    return (
      <div>
        <Grid container spacing={1}>
          {/* grid item xs=12 md=6 */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                m: 3,
                maxHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{
                  margin: "auto",
                  maxWidth: "100%",
                }}
              >
                <img
                  src={product.image}
                  alt=""
                  style={{
                    height: "300px",
                    width: "100%",
                    margin: "auto",
                    borderRadius: "10px",
                  }}
                />
              </CardMedia>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ m: 7 }}>
              <Typography variant="h4" gutterBottom={true}>
                {product.title}
              </Typography>
              <Typography variant="h5" gutterBottom={true} mb={5}>
                ${product.price}
              </Typography>
              <Typography
                variant="body"
                gutterBottom={true}
                sx={{ textAlign: "justify" }}
              >
                {product.description}.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              {!addCart && user ? (
                <Button
                  onClick={() => handleAddCart(cart)}
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add To Cart
                </Button>
              ) : addCart && user ? (
                <Button
                  onClick={() => handleRemoveCart(cart)}
                  variant="contained"
                  startIcon={<RemoveShoppingCartIcon />}
                >
                  Remove From Cart
                </Button>
              ) : (
                <Button
                  onClick={() => handleAddCart(cart)}
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                >Login First</Button>
                )}
              <Button
                variant="contained"
                startIcon={<ShoppingCartCheckoutIcon />}
              >
                Go To Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "80px", marginBottom: "80px" }}>
      {isLoading ? <SkeletonPage /> : <ShowProduct />}
    </div>
  );
};

export default ProductDetail;
