import React, { Component } from 'react';
import styled from 'styled-components';

const QuoteBig = styled.p`
  font-style: ${props => props.fontStyle || 'italic'};
  font-size: ${props => props.fontSize || '30px'};
  line-height: ${props => props.lineHeight || '36px'};
  color: ${props => props.color || '#FFF'};
  margin: ${props => props.margin || '0 0 0 0'};
  text-align: ${props => props.textAlign || 'left'};
`;

QuoteBig.propTypes = {};

export default QuoteBig;
