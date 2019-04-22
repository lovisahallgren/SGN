import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarItem from '../NavbarItem';
import nookies from 'nookies';
import SmallP from '../SmallP';
import P from '../P';
import ArrowRight from '../SVGs/ArrowRight';
import ArrowDown from '../SVGs/ArrowDown';
import Facebook from '../SVGs/Facebook';
import Youtube from '../SVGs/Youtube';
import Instagram from '../SVGs/Instagram';
import Link from 'next/link';
import Flag from '../SVGs/Flag';
import Donate from '../Donate';

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 0.875rem;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-inline-start: -6px;
    margin-inline-end: -6px;
    list-style: none;
  }

  li {
    display: block;
  }

  a {
    font-weight: bold;
  }

  article {
    width: 100vw;
    height: auto;
    background: ${props => props.background || 'rgba(0,0,0,0.75)'};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0;
    margin: 1rem 0rem 0 -1rem;
  }

  > div {
    font-weight: ${props => props.fontWeight || 'normal'};
    width: 50%;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 15%;
    margin: 2rem 1rem;
    justify-content: space-around;
  }

  button {
    width: 70%;
    height: 8%;
    background: ${props => props.background || '#FFF'};
    color: ${props => props.color || '#000'};
    border: none;
    text-decoration: underline;
    font-weight: bold;
    font-size: 0.875rem;
    padding: 0.875rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null,
      language: 'swedish',
      donaingIsOpen: false
    };

    this.handleContrastMode = this.handleContrastMode.bind(this);
    this.handleDonating = this.handleDonating.bind(this);
  }

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false',
      language: nookies.get(this.state.ctx).language
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

  handleDonating() {
    this.setState({
      donaingIsOpen: !this.state.donaingIsOpen
    });
  }

  render() {
    const isHighContrastMode = this.state.isHighContrastMode === 'true';
    const {
      contrastText,
      languageText,
      donateText,
      name,
      street,
      city,
      country,
      phone,
      email
    } = this.props;

    return (
      <StyledFooter>
        <ul>
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
                ? { background: 'var(--secondary-blue)' }
                : { background: 'var(--primary-blue)' }
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
                ? { background: 'var(--secondary-purple)' }
                : { background: 'var(--primary-purple)' }
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
        <article>
          <button
            onClick={this.handleContrastMode}
            style={{ marginTop: '3rem' }}
          >
            {contrastText}
            <ArrowRight margin="0 0 0.1rem 1rem" width="7%" />
          </button>
          <main>
            <div style={{ marginBottom: '1rem' }}>
              <Facebook />
              <Youtube />
              <Instagram />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <SmallP textDecoration="underline">Facebook</SmallP>
              <SmallP textDecoration="underline">Youtube</SmallP>
              <SmallP textDecoration="underline">Instagram</SmallP>
            </div>
          </main>
          <button>
            {languageText}
            <Flag
              style={{
                height: '100%',
                width: '10%',
                position: 'relative',
                top: '0.3rem',
                marginTop: '-1rem',
                marginLeft: '8rem',
                padding: '0'
              }}
              src={this.state.language}
            />
            <ArrowDown fill="#000" margin="0 0 0.1rem 1rem" />
          </button>
          <div
            style={{
              color: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              margin: '3rem 0 0 2rem'
            }}
          >
            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{name}</p>
            <p style={{ width: '70%' }}>{street}</p>
            <p>{city}</p>
            <p style={{ margin: '1rem 0' }}>{country}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
          <div
            onClick={this.handleDonating}
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '4rem 0 1rem -1.5rem',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <P
              style={{
                width: '50%',
                textDecoration: 'underline',
                marginLeft: '0.5rem'
              }}
              fontWeight="bold"
            >
              {donateText}
            </P>
            <ArrowDown
              style={{
                height: '100%',
                position: 'relative',
                right: '-7rem',
                top: '-2rem'
              }}
              fill="#FFF"
              margin="0 0 0.5rem 1rem"
            />

            <Donate openDonate={this.state.donaingIsOpen} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%'
            }}
          >
            <Link href="/gdpr">
              <SmallP textDecoration="underline">
                Integritetspolicy / GDPR
              </SmallP>
            </Link>
            <SmallP>© 2019 SGN</SmallP>
          </div>
        </article>
      </StyledFooter>
    );
  }
}

export default Footer;
