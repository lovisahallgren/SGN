import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar';
import LanguageNavbar from '../LanguageNavbar';
import Layout from '../Layout';
import Hamburger from '../SVGs/Hamburger';
import Flag from '../SVGs/Flag';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    height: 10%;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
      languageIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  componentDidMount() {}

  handleClick() {
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
      display: 'block'
    };

    return (
      <StyledHeader>
        <Link href="/">
          <a href="/"> Home </a>
        </Link>
        <Link href="/">
          <a href="/" style={{ marginRight: '-1rem' }}>
            SGN
          </a>
        </Link>
        <Flag
          style={{ marginRight: '-5rem' }}
          openLanguage={this.handleLanguage}
          src={'/static/images/sweden.svg'}
        />
        <Hamburger openMenu={this.handleClick} />
        <LanguageNavbar
          contrast={this.props.contrast}
          style={this.state.languageIsOpen ? showmenuStyle : null}
        />
        <Navbar
          contrast={this.props.contrast}
          isBigTextFunction={this.props.bigTextFunction}
          isBigText={this.props.bigText}
          style={this.state.menuIsOpen ? showmenuStyle : null}
        />
      </StyledHeader>
    );
  }
}

Header.propTypes = {};

export default Header;
