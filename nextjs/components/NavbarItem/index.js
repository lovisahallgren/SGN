import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowRight from '../SVGs/ArrowRight';

const StyledNavbarItem = styled.li`
  padding: 0.6rem 0;
  margin: 0.4rem;
  display: none;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1rem;
  display: none;

  a {
    color: white !important;
    padding: 0 1rem;
    text-decoration: underline !important;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: bold;
  }

  svg {
    fill: #fff;
    width: 15%;
    height: 100%;
    margin: 0.1rem 0rem;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 900px) {
    display: flex;
    opacity: 1;
    /* position: absolute; */
    height: auto;
    /* width: 11rem; */
    /* top: 40vh; */
  }
`;

const NavbarItem = props => {
  return (
    <StyledNavbarItem style={props.style}>
      <Link href={props.link}>
        <a href="">
          {props.text}
          <ArrowRight />
        </a>
      </Link>
    </StyledNavbarItem>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string
};

export default NavbarItem;
