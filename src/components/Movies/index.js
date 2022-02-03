import React, { useState } from "react";

import styled from "styled-components";
import MovieCard from "./MovieCard";
import MovieModelComponent from "./MovieModel";

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Movies = ({ moviesList }) => {
  const imgUrl = process.env.REACT_APP_API_BASE_IMAGE_URL || "your image url";

  const [showModel, setShowModel] = useState(false);
  const [selectedModel, setSelectedModel] = useState({});

  const handleClickOnMovie = (movie) => {
    setSelectedModel(movie);
    openModel();
  };

  const openModel = () => {
    setShowModel(true);
  };
  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <StyleDiv>
      {moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleClickOnMovie={handleClickOnMovie}
          imgUrl={imgUrl}
        />
      ))}
      <MovieModelComponent
        showModel={showModel}
        selectedModel={selectedModel}
        closeModel={closeModel}
        imgUrl={imgUrl}
      />
    </StyleDiv>
  );
};

export default Movies;
