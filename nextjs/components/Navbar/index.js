import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavbar = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 10%;
  width: 100vw;
  height: 30%;
  padding: 0;
  margin: 0;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3;
    padding: 16px;
  }

  li {
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
          <li>
            <Link href="/">
              <a href="/">Info</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="/">Aktivitet</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="/">Projekt</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="/">Socialt</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="/">Bidra</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="/">Kontakt</a>
            </Link>
          </li>
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
