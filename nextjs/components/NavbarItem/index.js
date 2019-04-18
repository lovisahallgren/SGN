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
  }

  svg {
    fill: #fff;
    width: 15%;
    margin: 0.1rem 0rem;
  }

  &:active {
    transform: scale(0.95);
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
