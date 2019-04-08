import React, {Component} from 'react';
import styled from 'styled-components';

const LetterBig = styled.p`
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '5.625rem'};
  line-height: ${props => props.lineHeight || '4.5rem'};
  color: ${props => props.color || '#FFF'}; 
`

LetterBig.propTypes = {

};

export default LetterBig;
