// import Navigation from '../components/Navigation'
import styled from 'styled-components'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Fragment } from 'react'
import Card from '../components/Card';

export default () => (
  	<Layout>
      <Card style={{background: "yellow", marginTop: "90%"}}/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
  		{/* <h1> HEJ </h1> */}
  	</Layout>
  )

// import Head from 'next/head'
// import Navigation from '../components/Navigation'
// import Layout from '../components/Layout'
// import { Fragment } from 'react'

// export default () => (
//   <Layout>
//     <Head>
//       <title>Support Group Network</title>
//       <meta name="description" content="Support Group Network - working for a better future" />
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//     </Head>
//     <Navigation />
//     <h1>Hej</h1>
//     {/* <Layout /> */}
//     {/* <h1>Your new server-side rendered React.js app!</h1> */}
//   </Layout>
// )
