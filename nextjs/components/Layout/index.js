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
      isHighContrastMode: null,
      isBigText: false
    };

    this.handleFontSize = this.handleFontSize.bind(this);
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  handleFontSize() {
    this.setState({
      isBigText: !this.state.isBigText
    });
  }

  render() {
    const { children } = this.props;
    const isHighContrastMode = this.state.isHighContrastMode === 'true';
    const isBigText = this.state.isBigText ? '18px' : '16px';

    return (
      <>
        <GlobalStyle isBigText={isBigText} />
        <Head>
          <title>Support Group Network</title>
          {/* <meta name="description" content="Support Group Network - working for a better future" /> */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header
          contrast={isHighContrastMode}
          bigTextFunction={this.handleFontSize}
          bigText={this.state.isBigText}
        />
        <div style={{ width: '100%', height: '6vh' }} />
        {children}
        <Form
          title="Vill du kontakta oss?"
          name="Namn"
          phone="Telefonnummer"
          email="E-mail"
          submit="Skicka"
          subject="Ärende"
        />

        <Footer
          contrast={isHighContrastMode}
          onClick={this.state.handleContrastMode}
          contrastText={
            isHighContrastMode ? 'Normalkontrastläge' : 'Högkontrastläge'
          }
          languageText="Språk"
          name="Support Group Network"
          street="Kungsladugårdsvägen 5 Restad Gård,"
          city="462 54 Vänersborg"
          country="Sverige"
          phone="+4676-884 08 84"
          email="info@supportgroup.se"
        />
      </>
    );
  }
}

export default Layout;
