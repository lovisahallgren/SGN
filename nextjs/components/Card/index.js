import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  max-height: 50rem;
  min-height: 21rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: ${props => props.alignItems || null};
  background: ${props => props.background || 'white'};
  color: black;
  padding: 16px 16px 20px 16px;
  margin: 16px 0;
`;

class Card extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
      <StyledCard style={this.props.style}>
        {children}
      </StyledCard>
    );
  }
}

Card.propTypes = {

};

export default Card;
