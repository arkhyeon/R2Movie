import React from "react";
import styled from "@emotion/styled";
import {genres} from "../lib/util";
import {useNavigate} from "react-router-dom";

function SearchMovie({ sm }) {
  const navigate = useNavigate();
  const enterMoviePlay = () => {
    navigate("/showMovie", { state: { ...sm } });
  };
  console.log(sm);

  return (
    <SearchContents onClick={enterMoviePlay}>
      <PosterWrap src={"https://image.tmdb.org/t/p/w200" + sm.poster_path} />
      <AvgPoint>
        <div />
      </AvgPoint>
      <SearchInfoWrap>
        <p>제목 : {sm.title || sm.name}</p>
        <p>
          장르 :{" "}
          {sm.genre_ids.map((genreId, i) => {
            if (i === 0) {
              return " " + genres[genreId];
            }
            return ", " + genres[genreId];
          })}
        </p>
        <p>
          {sm.overview?.length > 100
            ? sm.overview.slice(0, 100) + "..."
            : sm.overview}
        </p>
      </SearchInfoWrap>
    </SearchContents>
  );
}

const SearchContents = styled.div`
  width: 453px;
  height: 225px;
  color: #ebebeb;
  background-color: #000;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  display: flex;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const PosterWrap = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 5px;
`;

const SearchInfoWrap = styled.div`
  padding: 10px;

  & p {
    margin-bottom: 10px;
  }
`;

const AvgPoint = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #676aa8;

  & div {
    width: 10px;
    height: 10px;
    background-color: #ebebeb;
    border-radius: 100%;
  }
`;

export default SearchMovie;
