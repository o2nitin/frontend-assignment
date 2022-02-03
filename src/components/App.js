import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/logo.svg";
import SearchBar from "./SearchBar";
import Movie from "./Movies";

import styled from "styled-components";

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const AppWrapper = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
`;

const App = () => {
  const [moviesList, setMovieList] = useState([]);
  const apiUrl = process.env.REACT_APP_API_DOMAIN || "somedomain.com";
  const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY || "your secret key";

  useEffect(() => {
    axios.get(`${apiUrl}/movie/now_playing?api_key=${apiKey}`).then((res) => {
      setMovieList(res.data.results);
    });
  }, [apiUrl, apiUrl]);

  return (
    <AppWrapper>
      <StyledHead>
        <img src={logo} alt="Timescale" />
        <SearchBar
          apiUrl={apiUrl}
          apiKey={apiKey}
          setMovieList={setMovieList}
        />
      </StyledHead>
      <Movie moviesList={moviesList} />
    </AppWrapper>
  );
};

export default App;
