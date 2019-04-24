import React from 'react';
import styled from 'styled-components';
const StyledSvg = styled.svg`
  width: 6%;
  height: 7%;
  fill: #fff;
  margin: ${props => props.margin || '0 1rem'};
`;

const ArrowUp = props => {
  return (
    <StyledSvg
      {...props}
      viewBox="0 0 580 580"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M328 571h-79V171L107 320l-58-60L289 9l242 251-59 61-144-148z" />
    </StyledSvg>
  );
};

export default ArrowUp;
