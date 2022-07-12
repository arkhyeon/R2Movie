import React, {useState} from "react";
import axios from "axios";
import {api_key, env} from "../lib/util";
import _ from "lodash";
import styled from "@emotion/styled";
import {MdSearch} from "react-icons/all";
import SearchMovie from "../component/SearchMovie";

function Search(props) {
  const [searchMovies, setSearchMovies] = useState([]);

  const searchContents = () => {
    const query = document.querySelector("#searchInput").value;

    if (query === "") {
      setSearchMovies([]);
      return;
    }

    axios
      .get(
        env.VITE_API + "3/search/multi?" + api_key + "&page=1&query=" + query
      )
      .then((res) => {
        console.log(res.data.results);

        setSearchMovies(actorFiltering(res.data.results));
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
  };

  const actorFiltering = (resultArray) => {
    return resultArray.filter((result) => {
      return result.gender === undefined;
    });
  };

  return (
    <>
      <SearchInputWrap>
        <SearchInput
          id="searchInput"
          type="text"
          placeholder="Search..."
          onKeyUp={_.debounce(searchContents, 300)}
        />
        <MdSearch />
      </SearchInputWrap>
      <MovieSearchWrap>
        {searchMovies.length === 0 && <span>검색 결과가 없습니다.</span>}
        {searchMovies.map((sm) => {
          return <SearchMovie key={sm.id} sm={sm} />;
        })}
      </MovieSearchWrap>
    </>
  );
}

const SearchInput = styled.input`
  width: 500px;
  background: #000;
  border: none;
  color: #ebebeb;
  font-size: 48px;

  &::placeholder {
    color: #ebebeb;
  }

  &:focus-visible {
    outline: none;
  }
`;

const SearchInputWrap = styled.div`
  width: 550px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;

  & svg {
    color: #ebebeb;
    font-size: 48px;
  }
`;

const MovieSearchWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-content: flex-start;
  margin-bottom: 50px;

  & span {
    font-size: 48px;
    color: #676aa8;
    font-weight: 700;
  }
`;

export default Search;
