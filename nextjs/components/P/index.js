import React, {Component} from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: ${props => props.fontSize || '0.8889rem'};
  line-height: ${props => props.lineHeight || '1.333rem'};
  color: ${props => props.color || '#FFF'};
  letter-spacing: ${props => props.letterSpacing || '0.02em'};
  text-indent: ${props => props.textIndent || '0'};
`

P.propTypes = {

};

export default P;
