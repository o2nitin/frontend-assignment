import React from "react";
import styled from "styled-components";
import moment from "moment";

const MovieModel = styled.div`
  ${(props) => (props.showModel ? "display : block;" : "display : none;")}
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModelHeader = styled.div`
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
`;

const ModelContent = styled.div`
  display: flex;
`;

const ModelImgDiv = styled.div`
  background: url(${(props) => (props.url ? props.url : null)}) 0 0 round;
  max-width: 100%;
  height: 400px;
  flex: 0 48%;
  margin-bottom: 2%; /* (100-32*3)/2 */
`;

const ModelDescDiv = styled.div`
  flex: 0 48%;
  height: 100px;
  padding: 10px;
  margin-bottom: 2%; /* (100-32*3)/2 */
`;

const MovieModelComponent = ({
  showModel,
  selectedModel,
  closeModel,
  imgUrl,
}) => {
  return (
    <MovieModel showModel={showModel}>
      <div className="modal-content">
        <ModelHeader>
          <span>{selectedModel.title}</span>
          <span className="close" onClick={closeModel}>
            &times;
          </span>
        </ModelHeader>
        <ModelContent>
          <ModelImgDiv
            url={imgUrl + `${selectedModel.poster_path}`}
          ></ModelImgDiv>
          <ModelDescDiv>
            <div>
              <span className="rel-date-title bold">Release Date: </span>{" "}
              <span className="rel-date-text">
                {moment(selectedModel.release_date, "YYYY-MM-DD").format(
                  "MMMM Do YYYY"
                )}
              </span>
            </div>
            <div>
              <p> {selectedModel.overview}</p>
            </div>
            <div>
              <span>
                <span className="bold">{selectedModel.vote_average}</span>/10 (
                {selectedModel.vote_count} total votes)
              </span>
            </div>
          </ModelDescDiv>
        </ModelContent>
      </div>
    </MovieModel>
  );
};

export default MovieModelComponent;
