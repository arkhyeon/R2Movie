import React from "react";
import styled from "@emotion/styled";
import { genres } from "../lib/util";
import { useNavigate } from "react-router-dom";
import Badge from "./badge";

function SearchMovie({ sm }) {
  const navigate = useNavigate();
  const enterMoviePlay = () => {
    navigate("/showMovie", { state: { ...sm } });
  };

  return (
    <SearchContents onClick={enterMoviePlay}>
      <PosterWrap src={"https://image.tmdb.org/t/p/w500" + sm.poster_path} />
      <AvgPoint
        style={{
          background: `conic-gradient(#676aa8 0 ${
            sm.vote_average * 10
          }%, #DEDEDE ${sm.vote_average * 10}% 100% )`,
        }}
      >
        <div>{Math.round(sm.vote_average * 10) / 10}</div>
      </AvgPoint>
      <SearchInfoWrap>
        <h6>{sm.title || sm.name}</h6>
        <div>
          {sm.genre_ids.map((genreId) => (
            <Badge>{genres[genreId]}</Badge>
          ))}
        </div>
        <p>
          {sm.overview?.length > 130
            ? sm.overview.slice(0, 130) + "..."
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
  overflow: hidden;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 8px 10px 0;
    .badge {
      font-size: 12px;
    }
  }
`;

const AvgPoint = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0 0 115px;

  & div {
    width: 20px;
    height: 20px;
    background-color: #ebebeb;
    border-radius: 100%;
    color: #141414;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SearchMovie;
