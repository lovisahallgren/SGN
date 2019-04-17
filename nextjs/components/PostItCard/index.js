import React, { Component } from 'react';
import styled from 'styled-components';
import Line from '../Line';
import H2 from '../H2';
import FrontFace from './FrontFace';
import BackFace from './BackFace';

const StyledPostItCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
position: relative;
line-height: 40px;
padding: 0 20px;
width: 100%;
height: 16rem;
font-weight: 100;
margin-bottom: 10px;
background: ${props => props.background || 'white'};
transform-style: preserve-3d;


:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 3.5625rem 3.5625rem 0;
  border-style: solid;
  border-color: #fff #fff ${props => props.background || '#9B3030'} ${props => props.background || '#9B3030'};
  display: block;
  width: 0;
}


.front-face,
.back-face {
  position: absolute;
	background-size: 100% 100%;
	height: 100%;
	width: 100%;
	pointer-events: none;
	border-radius: 5px;
	backface-visibility: hidden;
}

.back-face {
  transform: rotateY(-180deg);
}

.front-face {
  z-index: 2;
}

.post-it-card .flip {
  transform: rotateY(180deg);
}

a{
  text-decoration: underline;
  color: ${props => props.color || '#FFF'};
  margin-left: 10rem;
}

h3 {
  display: inline-flex;
  color: ${props => props.color || '#FFF'};
}

div {
  margin-bottom: -.9rem;
}

`;

class PostItCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  handleClick(e) {
    console.log("lol");
    const postItCard = document.querySelector(".post-it-card");
    postItCard.classList.toggle("flip");
    const back = document.querySelector(".back-face")
    back.classList.toggle("flip")
  }

  render() {
    const { children } = this.props;

    return (

      <StyledPostItCard style={this.props.style} onClick={this.handleClick} className="post-it-card">

          <FrontFace>

            <div className="h3-container">
              <h3>About us</h3>
              <h3><a href="#">Vänd</a></h3>
            </div>

            <Line style={{marginTop: "0rem"}}/>

            <H2>Support Group Network är ett samarbete där svenskar och flyktingar tillsammans stöttar och hjälper flyktingar</H2>

            <Line style={{marginTop: "0rem"}} />

          </FrontFace>

          <BackFace>lol</BackFace>

      </StyledPostItCard>

    );
  }
}

PostItCard.propTypes = {

};

export default PostItCard;
