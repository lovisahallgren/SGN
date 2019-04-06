import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import GlobalStyle from '../../styles';
import Head from 'next/head';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isHighConstrastMode: true,
      contrastWord: 'primary',
    }

    this.handleContrastMode = this.handleContrastMode.bind(this);
  }

  handleContrastMode() {
    this.setState(prevState => {
      return {
        isHighConstrastMode: !prevState.isHighConstrastMode,
      }
    })
      if(this.state.isHighConstrastMode) {
        this.setState(() => {
          return {
            contrastWord: 'secondary'
          }
        })
      } else {
          this.setState(() => {
            return {
              contrastWord: 'primary'
            }
          })

      }
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
                <Header contrast={this.state.contrastWord}/>
                <Navbar contrast={this.state.contrastWord} style={{position: "static", display: "block", marginTop: "17%", fontWeight: "bold"}} />
                    { children }
                <Footer contrast={this.state.contrastWord} onClick={this.handleContrastMode} />
            </>
        )
    }
}

export default Layout;
