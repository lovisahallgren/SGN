import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  /* width: 6%; */
  height: 100%;
  fill: #fff;
  margin: 0 1rem;
`;

const Facebook = () => {
  return (
    <StyledSvg fill="none" height="36" width="39" xmlns="http://www.w3.org/2000/svg"><clipPath id="a"><path d="M0 0h38.057v36H0z" /></clipPath><g clipPath="url(#a)"><path d="M35.958 0H2.099C.94 0 0 .89 0 1.986v32.028C0 35.112.94 36 2.1 36h18.226V22.059h-4.962v-5.432h4.962v-4.012c0-4.649 3.003-7.178 7.388-7.178 2.1 0 3.907.146 4.433.212v4.86h-3.046c-2.378 0-2.842 1.081-2.842 2.656v3.467h5.684l-.738 5.445H26.26V36h9.697c1.162 0 2.101-.888 2.101-1.986V1.986c0-1.097-.939-1.986-2.1-1.986z" fill="#fff" /></g></StyledSvg>
  );
};

export default Facebook;
