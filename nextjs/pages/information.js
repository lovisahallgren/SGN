import Layout from '../components/Layout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import H2 from '../components/H2'
import P from '../components/P'
import Card from '../components/Card'
import QuoteSmall from '../components/QuoteSmall'

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
        <Layout>
        <h1>Our Posts Page!</h1>
          {
            this.props.info.map( item => {
              console.log(item)
              return (
                <Card style={this.props.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}}>
                  <P>{item.paragraph_1}</P>
                  <QuoteSmall>{item.quote}</QuoteSmall>
                  <p>{item.author_quote}</p>
                  <P>{item.paragraph_2}</P>
                </Card>
                
              )
            })
          }
        </Layout>
      </>
    )
  }
}
