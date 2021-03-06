import React, { Component } from 'react';
import axios from 'axios';
import SocialPage from '../components/SocialPage';

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const contact = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/contact`
    );

    // Return response to posts object in props.
    return {
      contact: contact.data
    };
  }

  render() {
    return (
      <>
        <SocialPage {...this.props} />
      </>
    );
  }
}
