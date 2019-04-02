import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  height: auto;
`;

class Card extends Component {
  render() {
    return (
      <Layout>
        <StyledCard>

        </StyledCard>
      </Layout>
    );
  }
}

Card.propTypes = {

};

export default Card;
