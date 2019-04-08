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

  div {
    width: 100%;

  }
`;


const Footer = (props) => {

    return (
        <StyledFooter>

          <ul>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} link="/information" text="Info"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-pink)"} : {background: "var(--primary-pink)"}} link="/activities" text="Aktivitet"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-blue)"} : {background: "var(--primary-blue)"}} link="/projects" text="Projekt"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}} link="/social" text="Socialt"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-green)"} : {background: "var(--primary-green)"}} link="/contribute" text="Bidra"></NavbarItem>
            <NavbarItem style={props.contrast ? {background: "var(--secondary-yellow)"} : {background: "var(--primary-yellow)"}} link="/contact" text="Kontakt"></NavbarItem>
          </ul>
          <div>
            <button onClick={props.onClick}>High Contrast</button>


          </div>
        </StyledFooter>
    );
};

export default Footer;
