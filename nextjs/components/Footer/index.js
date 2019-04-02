import React from 'react';
import styled from 'styled-components';
import NavbarItem from '../NavbarItem';

const StyledFooter = styled.footer`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3;
    padding: 16px;
    list-style: none;
  }
`;


const Footer = () => {
    return (
        <StyledFooter>
          <ul>
            <NavbarItem style={{background: "var(--primary-red)"}} text="Info"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-pink)"}} text="Aktivitet"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-blue)"}} text="Projekt"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-purple)"}} text="Socialt"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-green)"}} text="Bidra"></NavbarItem>
            <NavbarItem style={{background: "var(--primary-yellow)"}} text="Kontakt"></NavbarItem>
          </ul>
          {/* <p>this is the footer </p> */}
        </StyledFooter>
    );
};

export default Footer;
