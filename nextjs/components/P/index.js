import React, {Component} from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-weight: ${props => props.fontWeight || 'regular'};
  font-size: ${props => props.fontSize || '0.8889rem'};
  lineHeight: ${props => props.lineHeight || '1.333rem'};
  color: ${props => props.color || '#FFF'}; 
`

P.propTypes = {

};

export default P;
