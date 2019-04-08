import React, {Component} from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: ${props => props.fontWeight || 'bold'};
  font-weight: ${props => props.lineHeight || '2rem'};
  font-size: ${props => props.fontSize || '1.778rem'};
  color: ${props => props.color || '#FFF'};
	/* position: ${props => props.position || 'absolute'}; */
	/* top: ${props => props.top}; */
	/* text-align: ${props => props.textAlign || 'center'}; */
`

H1.propTypes = {

};

export default H1;
