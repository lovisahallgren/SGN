import React, { Component } from 'react';
import styled from 'styled-components';
import Line from '../Line';
import H2 from '../H2';
import FrontFace from './FrontFace';
import BackFace from './BackFace';
import nookies from 'nookies';
import SmallP from '../SmallP';

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
    transition: 0.8s;
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

  .front-face {
    background-size: 100% 100%;
  }

  .front-face .h3-container,
  .back-face .h3-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 3.6rem 0rem 1rem;
  }

  .back-face::before,
  .front-face::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 2.75125rem 2.6875rem 0;
    border-style: solid;
    border-color: #fff #fff;
    display: block;
    width: 0;
  }

  .back-face {
    transform: rotateY(-180deg);
    backface-visibility: hidden;
  }

  .content-container {
    padding: 1rem;
  }

  #post-it-card.flip {
    transform: rotateY(180deg);
  }

  ${H2} {
    height: 9.875rem;
  }

  .flap {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

class PostItCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  handleClick(e) {
    e.preventDefault();
    const postItCard = document.getElementById('post-it-card');
    postItCard.classList.toggle('flip');
  }

  render() {
    const { children } = this.props;

    return (
      <StyledPostItCard onClick={this.handleClick}>
        <div id="post-it-card">
          <div style={this.props.style} className="front-face">
            <div className="h3-container">
              <SmallP>{this.props.frontFace.category}</SmallP>
              <SmallP>
                <a href="#">Vänd</a>
              </SmallP>
              <div className="flap">{this.props.frontFace.flap}</div>
            </div>
            <Line style={{ marginLeft: '1rem' }} />

            <H2 style={{ padding: '1rem' }}>{this.props.frontFace.content}</H2>

            <Line style={{ margin: '0 1rem' }} />
          </div>

          <div
            style={{ background: this.props.backFace.background }}
            className="back-face"
          >
            <div className="h3-container">
              <SmallP>{this.props.backFace.category}</SmallP>
              <SmallP>
                <a href="#">Vänd</a>
              </SmallP>
              <div className="flap">{this.props.backFace.flap}</div>
            </div>

            <Line style={{ marginLeft: '1rem' }} />

            <H2 style={{ padding: '1rem' }}>{this.props.backFace.content}</H2>

            <Line style={{ margin: '0 1rem' }} />
          </div>
        </div>
      </StyledPostItCard>
    );
  }
}

export default PostItCard;
