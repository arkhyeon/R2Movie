import React from "react";
import styled from "@emotion/styled";
import {useDispatch} from "react-redux";
import {setMovieDetail} from "../redux/movieDetail";

function MoviePoster({ content }) {
  const dispatch = useDispatch();

  return (
    <ContentWrap
      onClick={() => {
        dispatch(setMovieDetail(content));
      }}
    >
      <PosterWrap
        src={"https://image.tmdb.org/t/p/w200" + content.poster_path}
      />
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  width: 150px;
`;

const PosterWrap = styled.img`
  width: 150px;
  height: 225px;
  cursor: pointer;
`;

export default MoviePoster;
