import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import GlobalStyle from '../../styles';
import Head from 'next/head';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   isHighContrastMode: false,
    }

    // this.handleContrastMode = this.handleContrastMode.bind(this);
  }

  // handleContrastMode() {
  //   this.setState(prevState => {
  //     return {
  //       isHighContrastMode: !prevState.isHighContrastMode,
  //     }
  //   })
  // }

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
                <Header contrast={this.props.isHighContrastMode}/>
                <div style={{width: "100%", height: "6vh"}}></div>
                    { children }
                <Footer contrast={this.props.isHighContrastMode} onClick={this.props.handleContrastMode} />
            </>
        )
    }
}

export default Layout;

