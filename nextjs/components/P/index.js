import React, { Component } from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: ${props => props.fontSize || '1rem'};
  line-height: ${props => props.lineHeight || '1.5em'};
  color: ${props => props.color || '#FFF'};
  letter-spacing: ${props => props.letterSpacing || '0.02em'};
  text-indent: ${props => props.textIndent || '0'};
  font-weight: ${props => props.fontWeight || null};
`;

P.propTypes = {};

export default P;
