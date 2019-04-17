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

.flipper {
  width: 100%;
  height: 100%;
  position: relative;
  .transform-style(preserve-3d);
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
  backface-visibility: hidden;

}

.front-face {
  z-index: 2;
  background: none;
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
      flipped: false,
    };
  };

  handleClick(e) {
    this.setState({ flipped: !this.state.flipped});
    console.log("lol");
  }

  render() {
    const { children } = this.props;

    return (

      <StyledPostItCard style={this.props.style} onClick={this.handleClick}>
        <div className={"flipper" + (this.props.flipped ? "flipped" : "")}>

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
        </div>

      </StyledPostItCard>

    );
  }
}

PostItCard.propTypes = {

};

export default PostItCard;
