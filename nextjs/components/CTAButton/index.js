import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowRight from '../SVGs/ArrowRight';

const StyledCTAButton = styled.button`
  background: ${props => props.background || 'white'};
  border: none;
  width: 60%;
  margin: 1rem 0;
  /* height: 35%; */
  align-self: center;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  text-decoration: underline;

  svg {
    fill: #fff;
    width: 13%;
  }
`;

class CTAButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCTAClick = this.handleCTAClick.bind(this);
  }

  handleCTAClick() {
    const form = document.querySelector('#form');
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  render() {
    return (
      <StyledCTAButton
        onClick={this.handleCTAClick}
        background={this.props.background}
      >
        {this.props.buttonText}
        <ArrowRight />
      </StyledCTAButton>
    );
  }
}

CTAButton.propTypes = {};

export default CTAButton;
