// } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetByCategoryQuery } from "../services/fakeStoreApi";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCartTwoTone";

import "../App.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/reducers/productSlice";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { data } = useGetByCategoryQuery("electronics");

  // const [addedToCart, setAddedToCart] = useState({});

  const ProductList = ({ data }) => {
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
              <Typography variant="h6" component={"div"} color="white">
                ${data.price}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
              {data.description.substring(0, 100)}...
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
            {/* based id */}
            <NavLink
              style={{
                margin: "auto",
                textDecoration: "none",
                color: "inherit",
              }}
              to={`/products/${data.id}`}
            >
              <AddShoppingCartIcon /> Buy Now
            </NavLink>
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
