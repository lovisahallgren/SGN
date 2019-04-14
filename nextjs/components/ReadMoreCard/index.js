import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowRight from '../SVGs/ArrowRight';
import CTAButton from '../CTAButton';

const StyledReadMoreCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 1rem 1rem 2.25rem 1rem;
  margin-top: -1rem;

  img {
    width: 100%;
    margin: 1rem 0;
  }
`;

class ReadMoreCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <StyledReadMoreCard style={this.props.style}>
        {children}
        <CTAButton buttonText="Hello" background={this.props.background}>
          {this.props.buttonText}
          <ArrowRight />
        </CTAButton>
      </StyledReadMoreCard>
    );
  }
}

ReadMoreCard.propTypes = {};

export default ReadMoreCard;
