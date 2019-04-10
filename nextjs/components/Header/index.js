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

    position: fixed;
    top: 0;
    /* left: 3.5%; */
    width: 92%;
    padding: 16px 0px;
    background: white;
    /* height: 10%; */
    display: flex;
    justify-content: space-between;

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

    }

    this.handleClick = this.handleClick.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        menuIsOpen: !prevState.menuIsOpen,
      }
    })
  }

  // handleScroll() {
  //   if (window.scrollY > 300) {
  //     this.setState({menuIsOpen: false})
  //   } else {
  //     this.setState({menuIsOpen: true})
  //   }
  // }

  render() {
    const showmenuStyle = {
      display: "block",
      // height: "28vh",
      // opacity: 1,
      // transition: "opacity 0.4s ease",
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
          <Navbar contrast={this.props.contrast} style={this.state.menuIsOpen ? showmenuStyle : null}/>
      </StyledHeader>
    )
  }
}

Header.propTypes = {

};

export default Header;
