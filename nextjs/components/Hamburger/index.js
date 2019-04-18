import styled from 'styled-components';
import React, { Component } from 'react';


const StyledHamburger = styled.div`
position: absolute;
align-self: center;
display: block;
height: auto;
right: 1vw;
z-index: 99;
padding: 15px 10px;
cursor: pointer;


#bar-one,
#bar-two,
#bar-three {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.2s;
}

.transform #bar-one {
  transform: rotate(-45deg) translate(-7px, 8px);
}

.transform #bar-two {
  opacity: 0;
}

.transform #bar-three {
  transform: rotate(45deg) translate(-7px, -9px);
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
