import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar';
import LanguageNavbar from '../LanguageNavbar';
import Layout from '../Layout';
import Hamburger from '../Hamburger';
import Flag from '../SVGs/Flag';
import Logo from '../SVGs/Logo';
import nookies from 'nookies';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  height: 8vh;

  > a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    width: 40%;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      languageIsOpen: false,
      language: 'swedish'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  componentDidMount() {
    const lang = nookies.get(this.state.ctx).language;

    this.setState({
      language: lang
    });
  }

  handleClick() {
    const burgerIcon = document.getElementById('burger-icon');
    burgerIcon.classList.toggle('transform');
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    });
    if (this.state.languageIsOpen === true) {
      this.setState({
        languageIsOpen: !this.state.languageIsOpen
      });
    }
  }

  handleLanguage() {
    this.setState({
      languageIsOpen: !this.state.languageIsOpen
    });
    if (this.state.menuIsOpen === true) {
      this.setState({
        menuIsOpen: !this.state.menuIsOpen
      });
    }
  }

  render() {
    const showmenuStyle = {
      height: '28vh',
      transition: 'height 0.25s ease'
    };

    const showlanguageStyle = {
      height: '10vh',
      transition: 'height 0.25s ease',
      zIndex: '999'
    };

    return (
      <StyledHeader>
        <Link href="/">
          <a href="/">
            <Logo />
          </a>
        </Link>
        <Flag
          style={{ margin: '0.5rem 3rem 0 0' }}
          openLanguage={this.handleLanguage}
          src={this.state.language}
        />
        <Hamburger openMenu={this.handleClick} />
        <LanguageNavbar
          contrast={this.props.contrast}
          style={this.state.languageIsOpen ? showlanguageStyle : null}
          openLanguage={this.state.languageIsOpen}
        />
        <Navbar
          contrast={this.props.contrast}
          isBigTextFunction={this.props.bigTextFunction}
          isBigText={this.props.bigText}
          style={this.state.menuIsOpen ? showmenuStyle : null}
          openMenu={this.state.menuIsOpen}
        />
      </StyledHeader>
    );
  }
}

Header.propTypes = {};

export default Header;
