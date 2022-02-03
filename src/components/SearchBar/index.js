import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledInput = styled.input`
  background: rgb(245 244 231 / 24%);
  /* padding: 0 0 0 0; */
  border: 1px solid #80808082;
  font-size: small;
`;

const SearchBar = ({ apiUrl, apiKey, setMovieList }) => {
  let timer = "";
  const url = `${apiUrl}/search/movie?api_key=${apiKey}&query=`;
  const search = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (e.target.value !== "") {
        axios.get(url + e.target.value).then((res) => {
          setMovieList(res.data.results);
        });
      } else {
        axios
          .get(`${apiUrl}/movie/now_playing?api_key=${apiKey}`)
          .then((res) => {
            setMovieList(res.data.results);
          });
      }
    }, 800);
  };

  return (
    <>
      <StyledInput
        type="text"
        placeholder="Search for the movie"
        onKeyUp={search}
      />
    </>
  );
};

export default SearchBar;
