import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavIndicator = styled.div`
  width: 100%;
  height: 40vh;
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 16px 16px 20px 16px;
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
      // <Layout>
        <StyledNavIndicator style={this.props.style}>
          {children}
        </StyledNavIndicator>
      // </Layout>
    );
  }
}

NavIndicator.propTypes = {

};

export default NavIndicator;
