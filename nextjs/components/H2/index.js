import React, { Component } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: ${props => props.lineHeight || '2rem'};
  font-size: ${props => props.fontSize || '1.5rem'};
  color: ${props => props.color || '#FFF'};
  margin: ${props => props.margin || '0 0 0 0'};
`;

H2.propTypes = {};

export default H2;
