import React, { Component } from 'react';
import styled from 'styled-components';
const StyledFrontFace = styled.div`


`;

class FrontFace extends Component  {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render() {
    const { children } = this.props;

  return (
    <StyledFrontFace className="front-face">
    {this.props.children}
    </StyledFrontFace>
  )
}
}

FrontFace.propTypes = {

};


export default FrontFace
