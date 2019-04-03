import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Layout from '../Layout';
import HamburgerIcon from '../HamburgerIcon';

const StyledHeader = styled.div`
  /* height: 10vh; */
  /* display: flex;
  justify-content: space-around; */
  /* transition: height .3s ease; */

  .header {
  /* width: 100%; */
    position: fixed;
    top: 0;
    left: 3.5%;
    width: 93%;
    padding: 16px;
    background: white;
    height: 10%;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    height: 10%;
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navbarIsOpen: true,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        navbarIsOpen: !prevState.navbarIsOpen,
      }
    })
  }

  handleScroll() {
    if (window.scrollY > 300) {
      this.setState({navbarIsOpen: false})
    } else {
      this.setState({navbarIsOpen: true})
    }
  }

  render() {
    const showNavbarStyle = {
      display: "block",
      // height: "28vh",
      opacity: 1,
      transition: "opacity 0.4s ease",
    }

    return (
      <StyledHeader>
        <div className="header">
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link href="/">
            <a href="/">SGN</a>
          </Link>
          <HamburgerIcon onClick={this.handleClick}/>
          <Navbar style={this.state.navbarIsOpen ? showNavbarStyle : null}/>
        </div>
      </StyledHeader>
    )
  }
}

Header.propTypes = {

};

export default Header;
