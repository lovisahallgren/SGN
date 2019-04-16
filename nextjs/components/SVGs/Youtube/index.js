import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  /* width: 6%; */
  height: 100%;
  fill: #fff;
  margin: 0 1rem;
`;

const Youtube = () => {
  return (
      <StyledSvg fill="none" height="32" width="47" xmlns="http://www.w3.org/2000/svg"><path d="M46.019 4.941a5.708 5.708 0 0 0-1.509-2.515 5.927 5.927 0 0 0-2.582-1.47C38.265 0 23.521 0 23.521 0S8.814-.02 5.114.956a5.927 5.927 0 0 0-2.582 1.47A5.708 5.708 0 0 0 1.023 4.94 58.14 58.14 0 0 0 0 16.021a58.141 58.141 0 0 0 1.023 11.036c.272.95.792 1.817 1.509 2.515a5.926 5.926 0 0 0 2.582 1.47C8.774 32 23.52 32 23.52 32s14.705 0 18.407-.958c.976-.265 1.866-.772 2.582-1.47s1.236-1.564 1.509-2.515a58.141 58.141 0 0 0 .98-11.037c.028-3.715-.3-7.424-.98-11.079zM18.815 22.874V9.146l12.272 6.874z" fill="#fff"/></StyledSvg>
  );
};

export default Youtube;
