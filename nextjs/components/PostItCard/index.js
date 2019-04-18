import React, { Component } from 'react';
import styled from 'styled-components';
import Line from '../Line';
import H2 from '../H2';
import FrontFace from './FrontFace';
import BackFace from './BackFace';
import nookies from 'nookies';

const StyledPostItCard = styled.div`

margin: 1rem auto;
background: none !important;

h3,
a {
  color: #fff;
}

#post-it-card {
  height: 17.5rem;
  position: relative;
  transform-style: preserve-3d;
  transition: .8s;
}

.front-face,
.back-face {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  pointer-events: none;
  backface-visibility: hidden;
}

.front-face .h3-container,
.back-face .h3-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 4.5rem 0rem 1rem;
}

.front-face::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 3.5625rem 3.5625rem 0;
  border-style: solid;
  border-color: #fff #fff ${props => props.borderColor || 'white'} ${props => props.borderColor || 'white'};
  display: block;
  width: 0;
}

.back-face {
  background: #9B3030;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
}

.back-face::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 3.5625rem 3.5625rem 0;
  border-style: solid;
  border-color: #fff #fff ${props => props.borderColor || 'white'} ${props => props.borderColor || 'white'};
  display: block;
  width: 0;
}

.content-container {
  padding: 1rem;
}

#post-it-card.flip {
  transform: rotateY(180deg);
}

`;

class PostItCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  handleClick(e) {
    e.preventDefault();
    const postItCard= document.getElementById("post-it-card");
    postItCard.classList.toggle("flip");

  }

  render() {
    const { children } = this.props;

    return (

      <StyledPostItCard onClick={this.handleClick}>

        <div id="post-it-card">
          <div style={this.props.style} className="front-face">

            <div className="h3-container">
              <h3>About us</h3>
              <h3><a href="#">Vänd</a></h3>
            </div>
            <Line style={{marginLeft: "1rem"}}/>



            <H2 style={{padding: "1rem"}}>Support Group Network är ett samarbete där svenskar och flyktingar tillsammans stöttar och hjälper flyktingar</H2>

            <Line style={{margin: "0 1rem"}}/>

          </div>

          <div style={this.props.backFace} className="back-face">
            <div className="h3-container">
              <h3>About us</h3>
              <h3><a href="#">Vänd</a></h3>
            </div>

            <Line style={{marginLeft: "1rem"}}/>

            <H2 style={{padding: "1rem"}}>Support Group Network är ett samarbete där svenskar och flyktingar tillsammans stöttar och hjälper flyktingar</H2>

            <Line style={{margin: "0 1rem"}}/>
          </div>
        </div>
      </StyledPostItCard>

    );
  }
}

export default PostItCard;
