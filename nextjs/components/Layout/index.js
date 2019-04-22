import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyle from '../../styles';
import Head from 'next/head';
import nookies from 'nookies';
import CookiePolicy from '../CookiePolicy';
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null,
      isBigText: false,
      cookiesAccepted: false,
      isLoading: true
    };

    this.handleFontSize = this.handleFontSize.bind(this);
    this.handleCookies = this.handleCookies.bind(this);
  }

  componentDidMount() {
    if (nookies.get(this.state.ctx).cookiesAccepted === undefined) {
      nookies.set(this.state.ctx, 'cookiesAccepted', false);
    }

    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false',
      cookiesAccepted:
        nookies.get(this.state.ctx).cookiesAccepted === 'true'
          ? 'true'
          : 'false',
      isLoading: false
    });
  }

  static async getInitialProps(ctx) {
    this.setState({
      ctx: ctx
    });
  }

  handleFontSize() {
    this.setState({
      isBigText: !this.state.isBigText
    });
  }

  handleCookies() {
    this.setState({
      cookiesAccepted: 'true'
    });
    nookies.set(
      this.state.ctx,
      'cookiesAccepted',
      !JSON.parse(nookies.get(this.state.ctx).cookiesAccepted),
      {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      }
    );
  }

  render() {
    const { children } = this.props;
    const isHighContrastMode = this.state.isHighContrastMode === 'true';
    const isBigText = this.state.isBigText ? '18px' : '16px';
    const cookiesAccepted =
      this.state.cookiesAccepted === 'true' ? true : false;
    return (
      <>
        {this.state.isLoading && (
          <div
            style={{
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              backgroundColor: 'white',
              zIndex: '4',
              top: '0',
              left: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Loading...
          </div>
        )}
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
        <div style={{ width: '100%', height: '7vh' }} />

        {children}

        <Footer
          contrast={isHighContrastMode}
          onClick={this.state.handleContrastMode}
          contrastText={
            isHighContrastMode ? 'Normalkontrastläge' : 'Högkontrastläge'
          }
          languageText="Språk"
          donateText="Vill du donera till vår organisation?"
          name="Support Group Network"
          street="Kungsladugårdsvägen 5 Restad Gård,"
          city="462 54 Vänersborg"
          country="Sverige"
          phone="+4676-884 08 84"
          email="info@supportgroup.se"
        />
        {!cookiesAccepted && (
          <CookiePolicy
            onAccept={this.handleCookies}
            accept={this.state.cookiesAccepted}
          />
        )}
      </>
    );
  }
}

export default Layout;
