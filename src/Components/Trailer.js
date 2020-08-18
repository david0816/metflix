import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 125px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 3px;
`;

const TrailerLink = styled.a``;

const Trailer = ({ id, src }) => (
  <TrailerLink href={`http://youtube.com/watch?v=${src}`} target="_blank">
    <Thumbnail imgUrl={`https://img.youtube.com/vi/${src}/0.jpg`}></Thumbnail>
  </TrailerLink>
);

Trailer.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Trailer;
