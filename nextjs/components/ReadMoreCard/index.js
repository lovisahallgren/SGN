import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import nookies from 'nookies';

const StyledReadMoreCard = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 16px 16px 36px 16px;
  margin-top: -1rem;
  transition: height 15s ease;
`;

class ReadMoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { children } = this.props;
    return (
      <StyledReadMoreCard style={this.props.style}>
        {children}
      </StyledReadMoreCard>
    );
  }
}

ReadMoreCard.propTypes = {

};

export default ReadMoreCard;
