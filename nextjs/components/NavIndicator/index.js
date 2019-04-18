import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavIndicator = styled.div`
  width: 100%;
  height: 11vh;
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 0.6875rem 0.8125rem;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: underline;
    color: ${props => props.color || 'white'};
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
  }

  img {
    height: 100%;
    margin-top: 0.3rem;
    margin-left: -0.4rem;
  }
`;

class NavIndicator extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <StyledNavIndicator style={this.props.style}>
        {children}
      </StyledNavIndicator>
    );
  }
}

NavIndicator.propTypes = {};

export default NavIndicator;
