import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Layout from '../Layout';
import Hamburger from '../SVGs/Hamburger';

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 3.5%;
    width: 93%;
    padding: 16px 0px;
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
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  render() {
    const showmenuStyle = {
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
          <Hamburger openMenu={this.handleClick} />
          <Navbar contrast={this.props.contrast} style={this.state.menuIsOpen ? showmenuStyle : null}/>
      </StyledHeader>
    )
  }
}

Header.propTypes = {

};

export default Header;
