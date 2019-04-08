import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavIndicator = styled.div`
  width: 100%;
  height: 13vh;
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 15px 15px 11px 13px;
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
  /* top: 100vh; */
  /* margin: 10px; */
  /* padding: 16px; */
`;

class NavIndicator extends Component {
  constructor(props) {
    // console.log(props);
    super();
    this.state = {

    }
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

NavIndicator.propTypes = {

};

export default NavIndicator;
