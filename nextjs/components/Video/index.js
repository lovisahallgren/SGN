import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  margin-bottom: -0.3rem;
`;

const Video = props => {
  return (
    <StyledVideo controls autoPlay muted loop>
      <source src="/static/images/hero-film-instagram.mp4" type="video/mp4" />
    </StyledVideo>
  );
};

export default Video;
