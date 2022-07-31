import React from "react";
import Header from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Swiper.css";

// import required modules
import { EffectCards, Autoplay } from "swiper";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import {
  useGetByCategoryQuery,
  useGetProductsQuery,
} from "../services/fakeStoreApi";

const Home = () => {
  // test data dari api
  const {data, error, isLoading} = useGetByCategoryQuery('electronics');
  // if (isLoading) {
  //   console.log("loading");
  // }
  // console.log(data);

  const CardProduct = ({ file }) => {
    return (
      <Card sx={{ width: "100%", borderRadius: "5px" }}>
        <CardMedia
          component="img"
          height="inherit"
          image={file.image}
          alt=""
        />
      </Card>
    );
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        // mt={5}
        backgroundColor="background.default"
      >
        <Grid item xs={12} md={6} mb={10} pt={5}>
          <Swiper
            slidesPerView={1}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide style={{ backgroundColor: "#7D665F" }}>
              {data.map(CardProduct(data))}
            </SwiperSlide>
          </Swiper>
        </Grid>

        {/* make grid column */}
        <Grid item md={6} p={3}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            commodi alias ad dolore voluptatem vel sequi eligendi harum repellat
            obcaecati quod perferendis reiciendis tempora delectus, aut corrupti
            nesciunt vero nam!
          </Typography>
        </Grid>
      </Grid>
      asdf
    </div>
  );
};

export default Home;
