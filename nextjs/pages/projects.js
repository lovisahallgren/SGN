import Layout from '../components/Layout'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import H2 from '../components/H2'
import P from '../components/P'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const posts = await axios.get(`http://sgn.test/wp-json/wp/v2/posts`)
    const projects = await axios.get(`http://sgn.test/wp-json/wp/v2/project`)

    // Return response to posts object in props.
    return {
      posts: posts.data,
      projects: projects.data
    }
  }
  render() {
    return (
      <>
        <Layout>
        <h1>Our Posts Page!</h1>
        {/* <ul> */}
          {
            this.props.projects.map( project => {
              return (
                <div>
                <H2 key={ project.id }>
                    {/* <Link href={ `/posts/${ post.slug }` }>
                        <a href={ `/posts/${ post.slug }` }>
                        { post.title.rendered }
                      </a> */}
                      { project.title.rendered }
                    {/* </Link> */}
                </H2>
                <div dangerouslySetInnerHTML={{__html: project.content.rendered}}></div>
                {/* <P>{project.content.rendered}</P> */}
                </div>
              )
            })
          }
        {/* </ul> */}
        </Layout>
      </>
    )
  }
}
