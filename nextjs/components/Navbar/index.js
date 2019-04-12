import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavbarItem from '../NavbarItem';
import nookies from 'nookies';

const StyledNavbar = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 98%;
  width: 101%;
  background: white;
  height: 28vh;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    margin-inline-start: -6px;
    margin-inline-end: -6px;
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

  button {
    padding: 0px 16px;
    background: ${props => props.background || '#FFF'};
    color: ${props => props.color || '#000'};
    border: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }
`

class Navbar extends Component {
   constructor(props) {

     super(props);
     this.state = {
       isHighContrastMode: null,
     }

     this.handleContrastMode = this.handleContrastMode.bind(this);
   }

   static async getInitialProps(ctx) {
     this.setState({
       ctx: ctx,
     })
   }

   componentDidMount() {
     this.setState({
       isHighContrastMode: nookies.get(this.state.ctx).contrast === "true" ? "true" : "false"
     })
   }

   handleContrastMode() {
     nookies.set(this.state.ctx, 'contrast', nookies.get(this.state.ctx).contrast === "true" ? "false" : "true", {
       maxAge: 30 * 24 * 60 * 60,
       path: '/'
     })
     document.location.reload();
   }
   render() {
     const isHighContrastMode = this.state.isHighContrastMode === "true"

     return(
       <StyledNavbar style={this.props.style}>
        <ul>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} link="/information" text="Info"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-pink)"} : {background: "var(--primary-pink)"}} link="/activities" text="Aktivitet"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-blue)"} : {background: "var(--primary-blue)"}} link="/projects" text="Projekt"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}} link="/social" text="Socialt"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-green)"} : {background: "var(--primary-green)"}} link="/contribute" text="Bidra"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-yellow)"} : {background: "var(--primary-yellow)"}} link="/contact" text="Kontakt"></NavbarItem>
        </ul>
        <div>
          <button>Stor text</button>
          <button className="border" onClick={this.handleContrastMode}>Högkontrastläge</button>
        </div>
      </StyledNavbar>
    )
  }
  }

Navbar.propTypes = {

};

export default Navbar;
