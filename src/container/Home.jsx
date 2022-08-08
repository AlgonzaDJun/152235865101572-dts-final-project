import React from "react";
// import Header from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { EffectCards, Autoplay } from "swiper";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import {
  useGetByCategoryQuery,
} from "../services/fakeStoreApi";
// import theme from "../theme/theme";
import Product from "./Product";

const Home = () => {
  // ambil data dari api
  const { data } = useGetByCategoryQuery("electronics");

  const CardProduct = ({ data }) => {
    return (
      <Card
        sx={{
          // height: "300px",
          width: "65%",
          margin: "auto",
          objectFit: "cover",
          borderRadius: "5px",
        }}
        // className={styles.Card}
      >
        <CardMedia
          component="img"
          height="100%"
          image={data.image}
          alt=""
          sx={
            {
              // width:"100%"
            }
          }
          // className={styles.Media}
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
        backgroundColor="background.default"
        mt={8}
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
            {data &&
              data.map((data) => {
                return (
                  <SwiperSlide
                    style={{ backgroundColor: "white" }}
                    key={data.id}
                  >
                    <CardProduct data={data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Grid>

        {/* make grid column */}
        <Grid item md={6} p={3}>
          <hr />
          <Typography color="white">
            <Box className="text-banner">
              Menyediakan berbagai macam produk elektronik, termasuk monitor,
              penyimpanan, dan sebagainya.
            </Box>
          </Typography>
          <hr />
        </Grid>
      </Grid>
      <Product />
    </div>
  );
};

export default Home;
