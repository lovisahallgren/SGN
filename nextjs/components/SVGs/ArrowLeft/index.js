import React from 'react';
import styled from 'styled-components';
const StyledSvg = styled.svg`
  width: 7%;
  height: 7%;
  fill: #fff;
  margin: 0 1rem;
`;

const ArrowLeft = () => {
  return (
    <StyledSvg viewBox="0 0 580 580" xmlns="http://www.w3.org/2000/svg">
      <path d="M571 252v79H171l149 142-60 58L9 291 260 49l61 59-148 144z" />
    </StyledSvg>
  );
};

export default ArrowLeft;
