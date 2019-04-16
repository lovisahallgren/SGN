import React, {Component} from 'react';
import styled from 'styled-components';

const QuoteBig = styled.p`
  font-style: ${props => props.fontStyle || 'italic'};
  font-size: ${props => props.fontSize || '1.875rem'};
  line-height: ${props => props.lineHeight || '2.25rem'};
  color: ${props => props.color || '#FFF'}; 
  margin: ${props => props.margin || '0 0 0 0'};
  text-align: ${props => props.textAlign || 'center'}; 
`

QuoteBig.propTypes = {

};

export default QuoteBig;
