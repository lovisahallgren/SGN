import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavbarItem from '../NavbarItem';
import nookies from 'nookies';

const StyledNavbar = styled.div`
  position: absolute;
  left: 0;
  top: 99%;
  width: 100%;
  padding: 0 1rem;
  background: white;
  height: 0vh;
  transition: height 0.25s ease;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    margin-inline-start: -6px;
    margin-inline-end: -6px;
    opacity: 0;
  }

  div {
    justify-content: center;
    font-weight: bold;
    opacity: 0;
    height: 0;
  }

  a {
    padding: 0 1rem;
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
    height: 0;
    display: none;
  }

  ul.visible {
    display: grid;
    opacity: 1;
    transition: opacity 1s ease;
    li {
      display: flex;
    }
  }

  div.visible {
    display: flex;
    opacity: 1;
    transition: opacity 1.5s ease;
    padding-top: 0.6rem;

    button {
      display: block;
      height: 1.25rem;
    }
    .border {
      height: 1.25rem;
    }
  }

  @media screen and (min-width: 900px) {
    display: flex;
    opacity: 1;
    position: static;
    margin: 0 auto;
    height: auto;
    background: none;
    padding: 0;

    ul {
      opacity: 1;
      display: flex;
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null
    };

    this.handleContrastMode = this.handleContrastMode.bind(this);
  }

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  handleContrastMode() {
    nookies.set(
      this.state.ctx,
      'contrast',
      nookies.get(this.state.ctx).contrast === 'true' ? 'false' : 'true',
      {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      }
    );
    document.location.reload();
  }

  render() {
    const isHighContrastMode = this.state.isHighContrastMode === 'true';
    const isBigTextFunction = this.props.isBigTextFunction;

    return (
      <StyledNavbar style={this.props.style}>
        <ul className={this.props.openMenu ? 'visible' : null}>
          <NavbarItem
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-pink)' }
                : { background: 'var(--primary-pink)' }
            }
            link="/activities"
            text="Aktivitet"
          />
          <NavbarItem
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-purple)' }
                : { background: 'var(--primary-purple)' }
            }
            link="/projects"
            text="Projekt"
          />
          <NavbarItem
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-green)' }
                : { background: 'var(--primary-green)' }
            }
            link="/contribute"
            text="Bidra"
          />
          <NavbarItem
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-blue)' }
                : { background: 'var(--primary-blue)' }
            }
            link="/social"
            text="Socialt"
          />
          <NavbarItem
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-red)' }
                : { background: 'var(--primary-red)' }
            }
            link="/information"
            text="Info"
          />
          <NavbarItem
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-yellow)' }
                : { background: 'var(--primary-yellow)' }
            }
            link="/contact"
            text="Kontakt"
          />
        </ul>
        <div className={this.props.openMenu ? 'visible' : null}>
          <button onClick={isBigTextFunction}>
            {this.props.isBigText ? 'Liten text' : 'Stor text'}
          </button>
          <button className="border" onClick={this.handleContrastMode}>
            {isHighContrastMode ? 'Normalkontrastläge' : 'Högkontrastläge'}
          </button>
        </div>
      </StyledNavbar>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
