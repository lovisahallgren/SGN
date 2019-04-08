import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavbarItem from '../NavbarItem';

const StyledNavbar = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 80%;
  width: 100%;
  background: white;
  height: 28vh;
  /* opacity: 0; */
  /* transform: translate(0, -100px); */
  /* transition: opacity 0.4s ease; */

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
  }

  div {
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-top: 16px;
  }

  a {
    padding: 0px 16px;
    text-decoration: none;
    color: black;
  }

  .border {
    border-left: 2px solid black;
  }
`

const Navbar = (props) => {
    return(
      <StyledNavbar style={props.style}>
        <ul>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} link="/information" text="Info"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-pink)"} : {background: "var(--primary-pink)"}} link="/activities" text="Aktivitet"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-blue)"} : {background: "var(--primary-blue)"}} link="/projects" text="Projekt"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}} link="/social" text="Socialt"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-green)"} : {background: "var(--primary-green)"}} link="/contribute" text="Bidra"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-yellow)"} : {background: "var(--primary-yellow)"}} link="/contact" text="Kontakt"></NavbarItem>
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
