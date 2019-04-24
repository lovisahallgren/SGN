import styled from 'styled-components';
import React, { Component } from 'react';


const StyledHamburger = styled.div`
position: absolute;
align-self: center;
display: block;
height: auto;
top: 0.3125rem;
right: 1vw;
z-index: 99;
padding: 0.9375rem 0.625rem;
cursor: pointer;


#bar-one,
#bar-two,
#bar-three {
  width: 2rem;
  height: 0.25rem;
  background-color: #333;
  margin: 4px 0;
  transition: 0.2s;
}

.transform #bar-one {
  transform: rotate(-45deg) translate(-0.4375rem, 0.4375rem);
}

.transform #bar-two {
  opacity: 0;
}

.transform #bar-three {
  transform: rotate(45deg) translate(-0.25rem, -0.28125rem);
}

`;


class Hamburger extends Component {
  render(){
    return (
      <StyledHamburger >

        <div id="burger-icon" onClick={this.props.openMenu} >
          <div id="bar-one"/>
          <div id="bar-two" />
          <div id="bar-three"/>
        </div>

      </StyledHamburger>

    )
  }
}

export default Hamburger;
