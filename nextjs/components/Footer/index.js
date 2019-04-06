import React from 'react';
import styled from 'styled-components';
import NavbarItem from '../NavbarItem';

const StyledFooter = styled.footer`
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-inline-start: -6px;
    margin-inline-end: -6px;
    list-style: none;
  }

  a {
    font-weight: bold;
  }
`;


const Footer = (props) => {
    return (
        <StyledFooter>
          <ul>
            <NavbarItem style={{background: `var(--${props.contrast}-red)`}} text="Info"></NavbarItem>
            <NavbarItem style={{background: `var(--${props.contrast}-pink)`}} text="Aktivitet"></NavbarItem>
            <NavbarItem style={{background: `var(--${props.contrast}-blue)`}} text="Projekt"></NavbarItem>
            <NavbarItem style={{background: `var(--${props.contrast}-purple)`}} text="Socialt"></NavbarItem>
            <NavbarItem style={{background: `var(--${props.contrast}-green)`}} text="Bidra"></NavbarItem>
            <NavbarItem style={{background: `var(--${props.contrast}-yellow)`}} text="Kontakt"></NavbarItem>
          </ul>
          <button onClick={props.onClick}>High Contrast</button>
        </StyledFooter>
    );
};

export default Footer;
