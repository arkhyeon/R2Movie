import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { api_key, env } from "../../lib/util";
import MovieSlider from "../../component/MovieSlider";
import styled from "@emotion/styled";

function Trend() {
  const [latest, setLatest] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [dayTrend, setDayTrend] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [weekTrend, setWeekTrend] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    axios
      .get(env.VITE_API + "3/movie/upcoming?" + api_key)
      .then((res) => {
        console.log(res);
        setLatest(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get(env.VITE_API + "3/trending/all/day?" + api_key)
      .then((res) => {
        setDayTrend(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get(env.VITE_API + "3/trending/all/week?" + api_key)
      .then((res) => {
        setWeekTrend(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SlideWrap>
      <p>New Contents</p>
      <MovieSlider contents={latest}></MovieSlider>
      <p>Today's Trends</p>
      <MovieSlider contents={dayTrend}></MovieSlider>
      <p>Weekly Trends</p>
      <MovieSlider contents={weekTrend}></MovieSlider>
    </SlideWrap>
  );
}

const SlideWrap = styled.div`
  margin: 0px 15px 25px;

  & p {
    font-size: 28px;
    color: #ebebeb;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export default Trend;
