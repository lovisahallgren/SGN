import React, { Component } from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  margin-bottom: -0.3rem;
`;

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: '/static/images/sgn_hero_desktop.mp4'
    };
    this.checkIfWindowDidResize = this.checkIfWindowDidResize.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth > 900) {
      this.setState({
        videoSrc: '/static/images/sgn_hero_desktop.mp4'
      });
    } else {
      this.setState({
        videoSrc: '/static/images/sgn_hero_mobile.mp4'
      });
    }

    window.addEventListener('resize', () => {
      this.checkIfWindowDidResize();
    });
  }

  checkIfWindowDidResize = () => {
    if (window.innerWidth > 900) {
      this.setState({
        videoSrc: '/static/images/sgn_hero_desktop.mp4'
      });
      return;
    }
    this.setState({
      videoSrc: '/static/images/sgn_hero_mobile.mp4'
    });
  };

  render() {
    return (
      <StyledVideo controls autoPlay muted loop>
        <source src={this.state.videoSrc} type="video/mp4" />
      </StyledVideo>
    );
  }
}

export default Video;
