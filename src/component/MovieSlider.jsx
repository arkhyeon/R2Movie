import React, { useRef, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviePoster from "./MoviePoster";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "@emotion/styled";
import "swiper/css";

function MovieSlider({ contents, setView, num }) {
  const [swiper, setSwiper] = useState(null);
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();

  SwiperCore.use([Navigation, Autoplay]);

  const swiperOption = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    },
    onSwiper: setSwiper,
    // breakpoints: breakPoint,
  };

  return (
    <Swiper
      {...swiperOption}
      onClick={() => setView(num)}
      ref={setSwiper}
      className="mySwiper"
      spaceBetween={15}
      slidesPerView={"auto"}
    >
      {contents.map((content) => {
        return (
          <SwiperSlide key={content.poster_path}>
            <MoviePoster content={content} />
          </SwiperSlide>
        );
      })}
      <SliderButton className="leftBtn" ref={navigationPrevRef}>
        <MdKeyboardArrowLeft size={48} />
      </SliderButton>
      <SliderButton className="rightBtn" ref={navigationNextRef}>
        <MdKeyboardArrowRight size={48} />
      </SliderButton>
    </Swiper>
  );
}

const SliderButton = styled.div`
  width: 50px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #ebebeb;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
  z-index: 1;
  &:hover {
    opacity: 1;
  }

  top: 0;
  &.leftBtn {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(95, 95, 95, 0) 100%
    );
    border-radius: 0 10px 10px 0;
  }

  &.rightBtn {
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(95, 95, 95, 0) 100%
    );
    border-radius: 10px 0 0 10px;
  }
`;

export default MovieSlider;
