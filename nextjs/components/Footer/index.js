import React, {Component} from 'react';
import styled from 'styled-components';
import NavbarItem from '../NavbarItem';
import nookies from 'nookies';


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

  a {
    font-weight: bold;
  }

  article {
    width: 100%;
    height: 70vh;
    background: ${props => props.background || 'rgba(0,0,0,0.75)'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    font-weight: ${props => props.fontWeight || 'normal'};
    width: 50%;
  }

  button {
    width: 70%;
    height: 7%;
    background: ${props => props.background || '#FFF'};
    color: ${props => props.color || '#000'};
    border: none;
    text-decoration: underline;
    font-weight: bold;
  }
`;
  class Footer extends Component {
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
     const {languageText,name, street, city, country, phone, email} = this.props

     return (
       <StyledFooter>
          <ul>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} link="/information" text="Info"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-pink)"} : {background: "var(--primary-pink)"}} link="/activities" text="Aktivitet"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-blue)"} : {background: "var(--primary-blue)"}} link="/projects" text="Projekt"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}} link="/social" text="Socialt"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-green)"} : {background: "var(--primary-green)"}} link="/contribute" text="Bidra"></NavbarItem>
            <NavbarItem style={isHighContrastMode ? {background: "var(--secondary-yellow)"} : {background: "var(--primary-yellow)"}} link="/contact" text="Kontakt"></NavbarItem>
          </ul>
          <article>
            <button onClick={this.handleContrastMode}></button>

            <button>{languageText}</button>
            <div style={{color: "#FFF"}}>
              <p>{name}</p>
              <p>{street}</p>
              <p>{city}</p>
              <p>{country}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </article>
        </StyledFooter>
    );
  };
}

export default Footer;
