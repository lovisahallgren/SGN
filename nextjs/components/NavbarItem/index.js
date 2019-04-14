import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowRight from '../SVGs/ArrowRight';

const StyledNavbarItem = styled.li`
  padding: 0.6rem 0;
  margin: 0.4rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1rem;

  a {
    color: white !important;
    padding: 0 1rem;
    text-decoration: underline !important;
  }

  svg {
    fill: #fff;
    width: 10%;
    margin: 0 1rem;
  }
`;

const NavbarItem = props => {
  return (
    <StyledNavbarItem style={props.style}>
      <Link href={props.link}>
        <a href="">{props.text}</a>
      </Link>
      <ArrowRight />
    </StyledNavbarItem>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string
};

export default NavbarItem;
