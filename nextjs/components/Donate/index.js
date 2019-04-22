import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import nookies from 'nookies';
import SmallP from '../SmallP';
// import Swish from '/static/images/swish.png';
// import Bankgirot from '/static/images/bankgirot-logo.png';

const StyledDonate = styled.div`
  /* position: absolute;
  left: 0;
  top: 100%; */
  /* left: -1rem; */
  /* position: relative; */
  /* width: 104.3%; */
  padding: 0 2rem 0 3rem;
  background: white;
  /* height: 0vh; */
  transition: height 0.25s ease;
  background: #fff;
  transition: height 0.5s ease;
  margin-top: 2rem;

  img {
    width: 60%;
  }

  div,
  ${SmallP}, img {
    justify-content: center;
    /* font-weight: bold; */
    opacity: 0;
    height: 0;
  }

  .visible {
    display: flex;
    justify-content: flex-start;
    opacity: 1;
    transition: opacity 1.5s ease;
    padding-top: 1rem;
    height: 35vh;
    transition: height 0.5s ease;
    align-items: flex-start;
  }

  div.visible * {
    display: flex;
    opacity: 1;
    transition: opacity 1.5s ease;
    padding-top: 1rem;
    height: auto;
    /* img.visible { */
    /* width: 0%; */
    /* } */
  }
`;

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null
    };

    this.handleContrastMode = this.handleContrastMode.bind(this);
  }

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  handleContrastMode() {
    nookies.set(
      this.state.ctx,
      'contrast',
      nookies.get(this.state.ctx).contrast === 'true' ? 'false' : 'true',
      {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      }
    );
    document.location.reload();
  }

  render() {
    const isHighContrastMode = this.state.isHighContrastMode === 'true';

    return (
      <StyledDonate
        className={this.props.openDonate ? 'visible' : null}
        style={this.props.style}
      >
        <div
          className={this.props.openDonate ? 'visible' : null}
          style={{ display: 'flex' }}
        >
          <div
            className={this.props.openDonate ? 'visible' : null}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
              marginRight: '2rem'
            }}
          >
            <img src={'/static/images/bankgirot-logo.png'} alt="" />
            <SmallP color="#000">Bankgiro:</SmallP> 5138-5854
            <SmallP color="#000">Organisationsnr:</SmallP> 802503-7097
            <SmallP color="#000">Organization name:</SmallP> Support Group
            Network (SGN)
          </div>
          <div
            className={this.props.openDonate ? 'visible' : null}
            style={{ display: 'flex', flexDirection: 'column', width: '40%' }}
          >
            <img src={'/static/images/swish.png'} alt="" />
            <SmallP color="#000">Swish nummer:</SmallP> 123 223 37 32
          </div>
        </div>
      </StyledDonate>
    );
  }
}

Donate.propTypes = {};

export default Donate;
