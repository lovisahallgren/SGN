import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavbarItem = styled.li`
  padding: 0.6rem;
  margin: 0.4rem;

  a {
    color: white !important;
    padding: 0px 16px;
    text-decoration: underline !important;
  }
`

const NavbarItem = (props) => {
    return(
      <StyledNavbarItem style={props.style}>
          <Link href="/">
            <a href="/">{props.text}</a>
          </Link>
      </StyledNavbarItem>
    )
  }

NavbarItem.propTypes = {
  text: PropTypes.string,
};

export default NavbarItem;
