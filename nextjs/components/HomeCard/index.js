import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHomeCard = styled.div`
  width: 100%;
  height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  background: ${props => props.background || 'white'};
  color: ${props => props.color || 'white'};
  padding: 0.5rem 0.8125rem 0.625rem 0.8125rem;
  margin: 1rem 0;
  background-position: center;
  background-repeat: repeat;
  /* object-fit: cover; */

  svg {
    fill: #fff;
    /* width: 25%; */
    height: 35%;
    margin: 0 0 -0.5rem 1rem;
  }
  img {
    height: 60%;
    margin-top: 0.3rem;
    margin-left: -0.4rem;
  }

  &:active {
    transform: scale(0.95);
  }
`;

class HomeCard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <StyledHomeCard onClick={this.props.onClick} style={this.props.style}>
        {children}
      </StyledHomeCard>
    );
  }
}

HomeCard.propTypes = {};

export default HomeCard;
