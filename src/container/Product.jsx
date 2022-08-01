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
import React from "react";
import { useGetByCategoryQuery } from "../services/fakeStoreApi";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "../App.css";

const Product = () => {
  const { data, error, isLoading } = useGetByCategoryQuery("electronics");

  const ProductList = ({ data }) => {
    return (
      <Card className="card-root">
        <CardMedia
          className="card-media"
          // component="img"
          // height=""
          // image=""
          // title={data[0].title}
        >
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
        >
          <IconButton size="small" aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={4}
       >
        {data &&
          data.map((data) => {
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
