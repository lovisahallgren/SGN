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
  padding: 16px 16px 20px 16px;
  margin: 16px 0;
  background-position: center;
  background-repeat: repeat;
  /* object-fit: cover; */

  svg {
    fill: #fff;
    /* width: 25%; */
    height: 20%;
    /* margin: 0.1rem 1rem; */
  }
`;

class HomeCard extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <StyledHomeCard style={this.props.style}>{children}</StyledHomeCard>;
  }
}

HomeCard.propTypes = {};

export default HomeCard;
