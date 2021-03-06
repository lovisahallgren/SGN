import styled from 'styled-components';
import Head from 'next/head';
import HomePage from '../components/HomePage';
import axios from 'axios';
import React, { Component, Fragment } from 'react';

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const posts = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/posts`
    );
    const projects = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/project`
    );
    const info = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/info`
    );
    const activities = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/activities`
    );
    const contribute = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/contribute`
    );
    const contact = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/contact`
    );
    const social = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/social`
    );

    // Return response to posts object in props.
    return {
      posts: posts.data,
      projects: projects.data,
      info: info.data,
      activities: activities.data,
      contribute: contribute.data,
      contact: contact.data,
      social: social.data
    };
  }

  render() {
    return (
      <>
        <HomePage {...this.props} />
      </>
    );
  }
}
