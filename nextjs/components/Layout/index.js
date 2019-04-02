import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyle from '../../styles';
import Head from 'next/head';

class Layout extends Component {
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
                <Header />
                    { children }
                {/* <Footer /> */}
            </>
        )
    }
}

export default Layout;
