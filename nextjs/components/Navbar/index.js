import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavbarItem from '../NavbarItem';

const StyledNavbar = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 10%;
  width: 100vw;
  /* height: 50%; */
  padding: 0;
  margin: 0;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3;
    padding: 16px;
    list-style: none;
  }

  div {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  a {
    padding: 0px 16px;
  }

  .border {
    border-left: 2px solid black;
  }
`

const Navbar = (props) => {
    return(
      <StyledNavbar style={props.style}>
        <ul>
          <NavbarItem style={{background: "#FF9797"}} text="Info"></NavbarItem>
          <NavbarItem style={{background: "#FFA6E6"}} text="Aktivitet"></NavbarItem>
          <NavbarItem style={{background: "#AFCFFF"}} text="Projekt"></NavbarItem>
          <NavbarItem style={{background: "#A8A0FF"}} text="Socialt"></NavbarItem>
          <NavbarItem style={{background: "#A5FB9F"}} text="Bidra"></NavbarItem>
          <NavbarItem style={{background: "#FFE663"}} text="Kontakt"></NavbarItem>
        </ul>
        <div>
          <a href="">GDPR</a>
          <a className="border" href="">Log in</a>
          <a className="border" href="">Högkontrastläge</a>
        </div>
      </StyledNavbar>
    )
  }

Navbar.propTypes = {

};

export default Navbar;