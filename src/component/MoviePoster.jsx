import React from "react";
import styled from "@emotion/styled";

function MoviePoster({ movie }) {
  const a = "#" + parseInt(Math.random() * 0xffffff).toString(16);
  return (
    // <PosterWrap src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
    <PosterWrap style={{ backgroundColor: a }}>{movie}</PosterWrap>
  );
}

const PosterWrap = styled.div`
  width: 150px;
  height: 225px;
  margin-right: 15px;
`;

export default MoviePoster;
