import React, { Component } from 'react';
import styled from 'styled-components';

const SmallP = styled.p`
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '0.875rem'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: ${props => props.lineHeight || '1.3em'};
  font-style: ${props => props.fontStyle || 'normal'};
  text-align: ${props => props.textAlign || 'left'};
  margin: ${props => props.margin || '0 0 0 0'};
  text-decoration: ${props => props.textDecoration || 'none'};
  /* text-transform: ${props => props.textTransform || 'capitalize'}; */
`;

SmallP.propTypes = {};

export default SmallP;
