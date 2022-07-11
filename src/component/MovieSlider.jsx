import React, {useRef, useState} from "react";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import MoviePoster from "./MoviePoster";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/all";
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
    breakpoints: breakPoint,
  };

  return (
    <Swiper
      {...swiperOption}
      onClick={() => setView(num)}
      ref={setSwiper}
      className="mySwiper"
      spaceBetween={-50}
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

  top: 0px;
  &.leftBtn {
    left: 0px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(95, 95, 95, 0) 100%
    );
    border-radius: 0px 10px 10px 0px;
  }

  &.rightBtn {
    right: 0px;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(95, 95, 95, 0) 100%
    );
    border-radius: 10px 0px 0px 10px;
  }
`;

const breakPoint = {
  165: {
    slidesPerView: 0,
    slidesPerGroup: 0,
  },
  330: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  495: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  660: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  825: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  990: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  1155: {
    slidesPerView: 6,
    slidesPerGroup: 6,
  },
  1320: {
    slidesPerView: 7,
    slidesPerGroup: 7,
  },
  1485: {
    slidesPerView: 8,
    slidesPerGroup: 8,
  },
  1650: {
    slidesPerView: 9,
    slidesPerGroup: 9,
  },
  1815: {
    slidesPerView: 10,
    slidesPerGroup: 10,
  },
};

export default MovieSlider;
