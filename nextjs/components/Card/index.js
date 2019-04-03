import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  height: 50vh;
  /* background: green; */
  /* top: 100vh; */
  /* margin: 10px; */
  /* padding: 16px; */
`;

class Card extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      // <Layout>
        <StyledCard style={this.props.style}></StyledCard>
      // </Layout>
    );
  }
}

Card.propTypes = {

};

export default Card;
