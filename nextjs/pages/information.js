import Layout from '../components/Layout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import H2 from '../components/H2'
import P from '../components/P'
import Card from '../components/Card'
import QuoteSmall from '../components/QuoteSmall'
import SmallP from '../components/SmallP'
import Line from '../components/Line'
import Information from '../components/Information'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const posts = await axios.get(`http://sgn.test/wp-json/wp/v2/posts`)
    const projects = await axios.get(`http://sgn.test/wp-json/wp/v2/project`)
    const info = await axios.get(`http://sgn.test/wp-json/wp/v2/info`)

    // Return response to posts object in props.
    return {
      posts: posts.data,
      projects: projects.data,
      info: info.data
    }
    console.log(info)
  }
  render() {
    return (
      <>
        <Information {...this.props}/>
        
      </>
    )
  }
}
