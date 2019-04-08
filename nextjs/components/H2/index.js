import React, {Component} from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: ${props => props.lineHeight || '1.778rem'};
  font-size: ${props => props.fontSize || '1.333rem'};
  color: ${props => props.color || '#FFF'};
`

H2.propTypes = {

};

export default H2;
