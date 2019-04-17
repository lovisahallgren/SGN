import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImageCard = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: ${props => props.alignItems || null};
  background: ${props => props.background || 'white'};
  color: ${props => props.color || 'black'};
  margin: 1rem 0;

  img {
    margin-bottom: 1rem;
    border-bottom: 5px solid ${props => props.border || '#000'};
  }
`;

class ImageCard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <StyledImageCard {...this.props} style={this.props.style}>
        {children}
      </StyledImageCard>
    );
  }
}

ImageCard.propTypes = {};

export default ImageCard;
