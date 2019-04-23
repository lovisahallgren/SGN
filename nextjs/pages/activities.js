import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ActivitiesPage from '../components/ActivitiesPage';

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    // const posts = await axios.get(`http://${process.env.HOST}/wp-json/wp/v2/posts`)
    // const projects = await axios.get(`http://${process.env.HOST}/wp-json/wp/v2/project`)
    const activities = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/activities`
    );

    // Return response to posts object in props.
    return {
      // posts: posts.data,
      // projects: projects.data,
      activities: activities.data
    };
  }

  render() {
    return (
      <>
        <ActivitiesPage {...this.props} />
      </>
    );
  }
}
