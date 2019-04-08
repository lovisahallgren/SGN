import React, {Component} from 'react';
import styled from 'styled-components';

const QuoteSmall = styled.p`
  font-style: ${props => props.fontStyle || 'italic'};
  font-size: ${props => props.fontSize || '1.333rem'};
  line-height: ${props => props.lineHeight || '1.778rem'};
  color: ${props => props.color || '#FFF'}; 
`

QuoteSmall.propTypes = {

};

export default QuoteSmall;
