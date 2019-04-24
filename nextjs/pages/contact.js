import React, { Component } from 'react';
import axios from 'axios';
import ContactPage from '../components/ContactPage';

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const contact = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/contact`
    );
    // const postit = await axios.get(
    //   `http://${process.env.HOST}/wp-json/wp/v2/postItCards`
    // );

    // Return response to posts object in props.
    return {
      contact: contact.data
      // postit: postit.data
    };
  }

  render() {
    return (
      <>
        <ContactPage {...this.props} />
      </>
    );
  }
}
