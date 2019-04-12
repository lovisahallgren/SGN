import React, {Component} from 'react';
import styled from 'styled-components';

const Line = styled.span`
    background: ${props => props.backgroundColor || 'white'};
    width: ${props => props.width || '2.75rem'};
    height: ${props => props.width || '1px'};
    margin: ${props => props.margin || '20px 0'};

`

Line.propTypes = {

};

export default Line;
