import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  background: lightgray;
  flex: 0 23%;
  width: 100%;
  height: 390px;
  margin-bottom: 2%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledImg = styled.div`
  background: url(${(props) => (props.url ? props.url : null)}) 0 0 round;
  max-width: 100%;
  height: 360px;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-topright: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledTitle = styled.div`
  background: white;
  font-size: 1rem;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const StyledRating = styled.div`
  height: 35px;
  width: 35px;
  background: white;
  border-radius: 18px;
  text-align: center;
  line-height: 35px;
  margin-top: 10px;
  margin-left: 15px;
  position: absolute;
  font-weight: 600;
`;

const MovieCard = ({ movie, handleClickOnMovie, imgUrl }) => {
  return (
    <MovieContainer key={movie.id} onClick={(e) => handleClickOnMovie(movie)}>
      <StyledImg url={imgUrl + `${movie.poster_path}`}>
        <StyledRating>{movie.vote_average}</StyledRating>
      </StyledImg>
      <StyledTitle>{movie.title}</StyledTitle>
    </MovieContainer>
  );
};
export default MovieCard;
