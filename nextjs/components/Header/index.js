import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Layout from '../Layout';
import HamburgerIcon from '../HamburgerIcon';
import Head from 'next/head';

const StyledHeader = styled.header`
  width: 100%;
  height: 20%;
  padding: 16px;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: black;
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navbarIsOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        navbarIsOpen: !prevState.navbarIsOpen,
      }
    })
  }

  render() {
    const showNavbarStyle = {
      display: "block",
    }
    return (
      <StyledHeader>
        <Head>
          <title>Support Group Network</title>
          {/* <meta name="description" content="Support Group Network - working for a better future" /> */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style jsx global>{`
          body{
            padding: 0;
            margin: 0;
            width: 100vw;
          }
        `}
        </style>
        <Link href="/">
          <a href="/">Home</a>
        </Link>
          <Link href="/">
            SGN
          </Link>
        <HamburgerIcon onClick={this.handleClick}/>
        <Navbar style={this.state.navbarIsOpen ? showNavbarStyle : null}/>
      </StyledHeader>
    )
  }
}

Header.propTypes = {

};

export default Header;
