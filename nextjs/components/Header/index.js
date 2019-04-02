import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Layout from '../Layout';
import HamburgerIcon from '../HamburgerIcon';

const StyledHeader = styled.header`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navbarIsOpen: true,
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
        <Link href="/">
          <a href="/">Home</a>
        </Link>
        <Link href="/">
          <a href="/">SGN</a>
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
