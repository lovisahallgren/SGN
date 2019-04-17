import React, { Component } from 'react';
import styled from 'styled-components';

const LetterBig = styled.p`
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '90px'};
  line-height: ${props => props.lineHeight || '82px'};
  color: ${props => props.color || '#FFF'};
`;

LetterBig.propTypes = {};

export default LetterBig;
