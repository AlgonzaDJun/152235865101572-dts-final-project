// import {

// } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useGetByCategoryQuery } from "../services/fakeStoreApi";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';

import "../App.css";

const Product = () => {
  const { data, error, isLoading } = useGetByCategoryQuery("electronics");

  // const [addedToCart, setAddedToCart] = useState({});

  const ProductList = ({ data }) => {
    const [addCart, setAddCart] = useState(false);

    const handleAddCart = () => {
      setAddCart(!addCart);
    };
    return (
      <div>
        <Card className="card-root" key={data.id}>
          <CardMedia className="card-media">
            <img src={data.image} alt="" />
          </CardMedia>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="cardContent">
              <Typography gutterBottom variant="h6">
                {data.title}
              </Typography>
              <Typography variant="h6" component="p" color="white">
                ${data.price}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
              {data.description.substring(0, 100)}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            className="cardActions"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            // key={data.id}
          >
            <IconButton
              size="small"
              key={data.id}
              aria-label="add to cart"
              onClick={handleAddCart}
            >
              {/* based id */}
              {!addCart ? <AddShoppingCartIcon /> : <RemoveShoppingCartIcon />}
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={4} mt={5}>
        {data &&
          data.map((data, id) => {
            return (
              <Grid item xs={12} sm={5} md={3} key={data.id} m={6}>
                <ProductList data={data} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Product;
