import React from 'react';
import styled from 'styled-components';
const StyledSvg = styled.svg`
  width: 7%;
  /* height: 5%; */
  fill: ${props => props.fill || '#FFF'};
  margin: ${props => props.margin || '0 0 0 0'};
  /* margin: 0 1rem; */
`;

const ArrowDown = (props) => {
  return (
    <StyledSvg {...props} viewBox="0 0 580 580" xmlns="http://www.w3.org/2000/svg">
      <path d="M252 9h79v400l142-149 58 60-240 251L49 320l59-61 144 148z" />
    </StyledSvg>
  );
};

export default ArrowDown;
