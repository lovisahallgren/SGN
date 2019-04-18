import React, { Component } from 'react';
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
import Form from '../Form';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Video from '../Video';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null
    };
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  render() {
    const isHighContrastMode = this.state.isHighContrastMode === 'true';

    return (
      <Layout>
        <Video />
        <Link href="/projects">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-purple)' }
                : { background: 'var(--primary-purple)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.projects[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2>
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/projects">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-purple)' }
                : { background: 'var(--primary-purple)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.projects[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2>
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/activities">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-pink)' }
                : { background: 'var(--primary-pink)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.activities[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2>
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/activities">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-pink)' }
                : { background: 'var(--primary-pink)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.activities[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2>
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
                {this.props.posts[0].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Form
          title="Vill du kontakta oss?"
          name="Namn"
          phone="Telefonnummer"
          email="E-mail"
          submit="Skicka"
          subject="Ärende"
        />
        <Link href="/contact">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-yellow)' }
                : { background: 'var(--primary-yellow)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <Link href="/activities">
                <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                  {this.props.activities[0].type}
                </SmallP>
              </Link>
              <LetterBig>K</LetterBig>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2>{this.props.posts[0].title.rendered}</H2>
              <Link href="/activities">
                <ArrowRight />
              </Link>
            </div>
          </HomeCard>
        </Link>
        <Link href="/activities">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-red)' }
                : { background: 'var(--test)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <Link href="/activities">
                <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                  {this.props.activities[0].type}
                </SmallP>
              </Link>
              <LetterBig>K</LetterBig>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2>{this.props.posts[0].title.rendered}</H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
      </Layout>
    );
  }
}

export default Home;
