import React, {Component} from 'react';
import styled from 'styled-components';

const QuoteBig = styled.p`
  font-style: ${props => props.fontWeight || 'italic'};
  font-size: ${props => props.fontSize || '1.667rem'};
  line-height: ${props => props.lineHeight || '2rem'};
  color: ${props => props.color || '#FFF'}; 
`

QuoteBig.propTypes = {

};

export default QuoteBig;
