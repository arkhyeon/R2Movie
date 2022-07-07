import React, { useState } from "react";
import styled from "@emotion/styled";

function MoviePoster({ content }) {
  const a = "#" + parseInt(Math.random() * 0xffffff).toString(16);

  return (
    <ContentWrap>
      <PosterWrap
        src={"https://image.tmdb.org/t/p/w200" + content.poster_path}
      />
      {/*<PosterWrap*/}
      {/*  style={{ backgroundColor: a }}*/}
      {/*  onClick={() => console.log(content)}*/}
      {/*>*/}
      {/*  {content}*/}
      {/*</PosterWrap>*/}
      <HideWrap></HideWrap>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  & div:hover ~ article {
    visibility: visible;
    opacity: 1;
    height: 200px;
  }
`;

const PosterWrap = styled.img`
  width: 150px;
  height: 225px;
`;

const HideWrap = styled.article`
  width: 200px;
  height: 0px;
  background-color: azure;
  visibility: hidden;
  transition: 1s cubic-bezier(0.25, 0.1, 0, 0);
  transition-delay: 1s;
  opacity: 0;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export default MoviePoster;
