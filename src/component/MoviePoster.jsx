import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setDisplay } from "../redux/modal";
import { setMovieDetail } from "../redux/movieDetail";

function MoviePoster({ content }) {
  const dispatch = useDispatch();
  const a = "#" + parseInt(Math.random() * 0xffffff).toString(16);

  let action = 0;
  return (
    <ContentWrap
      onMouseEnter={() => {
        action = setTimeout(() => {
          dispatch(setDisplay("block"));
          dispatch(setMovieDetail(content));
        }, 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(action);
      }}
    >
      <PosterWrap
        src={"https://image.tmdb.org/t/p/w200" + content.poster_path}
      />
      {/*<PosterWrap*/}
      {/*  style={{ backgroundColor: a }}*/}
      {/*  onClick={() => console.log(content)}*/}
      {/*>*/}
      {/*  {content}*/}
      {/*</PosterWrap>*/}
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  width: 150px;
  //&:hover img ~ article {
  //  display: block;
  //}
`;

const PosterWrap = styled.img`
  width: 150px;
  height: 225px;
  cursor: pointer;
`;

export default MoviePoster;
