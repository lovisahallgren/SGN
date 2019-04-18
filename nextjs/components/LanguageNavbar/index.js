import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LanguageNavbarItem from '../LanguageNavbarItem';
import nookies from 'nookies';
import Flag from '../SVGs/Flag';

const StyledLanguageNavbar = styled.div`
  /* display: none; */
  position: absolute;
  left: 0;
  top: 98%;
  width: 100%;
  padding: 0 1rem;
  background: white;
  height: auto;
  color: black;
  text-decoration: underline;
  font-weight: bold;
  height: 0vh;
  transition: height 0.25s ease;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    margin-inline-start: -6px;
    margin-inline-end: -6px;
    opacity: 0;
  }

  li {
    border: 1px solid #000;
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    display: none;
  }

  .isActive {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    text-decoration: underline;
  }

  .visible {
    opacity: 1;
    transition: opacity 1s ease;
  }

  a {
    padding: 0 1rem;
    text-decoration: none;
    color: black;
  }

  ul.visible {
    display: grid;
    opacity: 1;
    transition: opacity 1s ease;
    li {
      display: flex;
    }
  }
`;

class LanguageNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveLanguage: 'swedish',
      languages: ['swedish', 'english'],
      activeFlag: '/static/images/sweden.svg'
    };
  }

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx,
    })
  }

  componentDidMount() {
    const flag = nookies.get(this.state.ctx).language
    this.setState({
      activeFlag: flag
    })
  }

  render() {
    const engActive = this.state.activeFlag == '/static/images/united-kingdom.svg' ? 'isActive' : null
    const sweActive = this.state.activeFlag == '/static/images/sweden.svg' ? 'isActive' : null

    return (
      <StyledLanguageNavbar
        onClick={this.handleActiveLanguage}
        style={this.props.style}
      >
        <ul className={this.props.openLanguage ? 'visible' : null}>
          <LanguageNavbarItem
            onClick={() => {

              this.setState({
                languages: 'swedish',
                isActiveLanguage: 'swedish',
                activeFlag: '/static/images/sweden.svg'
              })
              nookies.set(this.state.ctx, 'language', '/static/images/sweden.svg')
              document.location.reload();
            }
            }
            // link="/contribute"
            text="Svenska"
            className={
              sweActive
            }
            src="/static/images/sweden.svg"
          />
          <LanguageNavbarItem
            onClick={() => {

              this.setState({
                languages: 'english',
                isActiveLanguage: 'english',
                activeFlag: '/static/images/united-kingdom.svg'
              })
              nookies.set(this.state.ctx, 'language', '/static/images/united-kingdom.svg')
              document.location.reload();
            }
            }
            // link="/contact"
            text="Engelska"
            className={
              engActive
            }
            src="/static/images/united-kingdom.svg"
          />
        </ul>
      </StyledLanguageNavbar>
    );
  }
}

LanguageNavbar.propTypes = {};

export default LanguageNavbar;
