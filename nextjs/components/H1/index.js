import React, {Component} from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: ${props => props.lineHeight || '2.25rem'};
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.color || '#FFF'};
`

H1.propTypes = {

};

export default H1;
