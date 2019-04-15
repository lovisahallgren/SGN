import React, {Component} from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import H1 from '../H1';
import H2 from '../H2';
import HomeCard from '../HomeCard';
import Navbar from '../Navbar';
import LetterBig from '../LetterBig';
import SmallP from '../SmallP';
import ArrowRight from '../SVGs/ArrowRight';
import nookies from 'nookies';

import Link from 'next/link';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isHighContrastMode: null
  }
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode: nookies.get(this.state.ctx).contrast === "true" ? "true" : "false"
    })
  }

  render() {
    console.log(this.props)
    const isHighContrastMode = this.state.isHighContrastMode === "true"

    return(
      <Layout>
        <HomeCard style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
          <div style={{display: "flex", justifyContent: "space-between", height: "50%"}}>
            <Link href="/projects">
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">{this.props.projects[0].type}</SmallP>
            </Link>
            <LetterBig>P</LetterBig>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "50%"}}>
            <H2>{this.props.posts[0].title.rendered}</H2>
            <Link href="/projects">
              <ArrowRight />
            </Link>
          </div>
        </HomeCard>
        <HomeCard style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
          <div style={{display: "flex", justifyContent: "space-between", height: "50%"}}>
            <Link href="/projects">
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">{this.props.projects[0].type}</SmallP>
            </Link>
            <LetterBig>P</LetterBig>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "50%"}}>
            <H2>{this.props.posts[0].title.rendered}</H2>
            <Link href="/projects">
              <ArrowRight />
            </Link>
          </div>
        </HomeCard>
        <HomeCard style={isHighContrastMode ? {background: "var(--secondary-pink)"} : {background: "var(--primary-pink)"}}>
          <div style={{display: "flex", justifyContent: "space-between", height: "50%"}}>
            <Link href="/activities">
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">{this.props.activities[0].type}</SmallP>
            </Link>
            <LetterBig>A</LetterBig>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "50%"}}>
            <H2>{this.props.posts[0].title.rendered}</H2>
            <Link href="/activities">
              <ArrowRight />
            </Link>
          </div>
        </HomeCard>
        <HomeCard style={isHighContrastMode ? {background: "var(--secondary-pink)"} : {background: "var(--primary-pink)"}}>
          <div style={{display: "flex", justifyContent: "space-between", height: "50%"}}>
            <Link href="/activities">
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">{this.props.activities[0].type}</SmallP>
            </Link>
            <LetterBig>A</LetterBig>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "50%"}}>
            <H2>{this.props.posts[0].title.rendered}</H2>
            <Link href="/activities">
              <ArrowRight />
            </Link>
          </div>
        </HomeCard>
      </Layout>

    )
  }
}

export default Home;
