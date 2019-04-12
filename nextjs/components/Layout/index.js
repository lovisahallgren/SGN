import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import GlobalStyle from '../../styles';
import Head from 'next/head';
import nookies from 'nookies';
import Form from '../Form';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null
    }
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode: nookies.get(this.state.ctx).contrast === "true" ? "true" : "false"
    })
  }

  render() {
        const { children } = this.props;
        return (
            <>
                <GlobalStyle />
                <Head>
                  <title>Support Group Network</title>
                  {/* <meta name="description" content="Support Group Network - working for a better future" /> */}
                  <meta charSet="utf-8" />
                  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header contrast={this.state.isHighContrastMode}/>
                <div style={{width: "100%", height: "6vh"}}></div>
                    { children }

                <Form title="Vill du kontakta oss?" name="Namn" phone="Telefonnummer" email="E-mail" submit="Skicka" ></Form>

                <Footer
                  contrast={this.state.isHighContrastMode}
                  onClick={this.state.handleContrastMode}
                  contrastText="Enable high contrast mode"
                  languageText="Svenska"
                  name="Support Group Network"
                  street= "Kungsladugårdsvägen 5 Restad Gård,"
                  city="462 54 Vänersborg"
                  country= "Sverige"
                  phone="+ 4676-884 08 84"
                  email="info@supportgroup.se"
                />
            </>
        )
    }
}

export default Layout;
