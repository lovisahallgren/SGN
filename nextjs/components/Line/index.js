import React, { Component } from 'react';
import styled from 'styled-components';

const Line = styled.div`
  background: ${props => props.backgroundColor || 'white'};
  width: ${props => props.width || '2.75rem'};
  height: ${props => props.width || '1px'};
  margin: ${props => props.margin || '0.8rem 0 2rem 0'};
`;

Line.propTypes = {};

export default Line;
