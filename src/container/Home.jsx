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
import { Grid, Typography } from "@mui/material";

const Home = () => {
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
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </Grid>

        {/* make grid column */}
        <Grid item md={6} p={4}>
          <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi alias ad dolore voluptatem vel sequi eligendi harum repellat obcaecati quod perferendis reiciendis tempora delectus, aut corrupti nesciunt vero nam!</Typography>
        </Grid>
      </Grid>
      asdf
    </div>
  );
};

export default Home;
