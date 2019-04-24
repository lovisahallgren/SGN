import React, { Component } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Line from '../Line';
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

const StyledPage = styled.section`
  .only-desktop-nav {
    display: none;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

    .only-desktop-nav {
      display: flex;
    }
  }
`;
class HomePage extends Component {
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
        <div
          className="textDivider"
          style={{
            padding: '0.5rem 1.5rem'
          }}
        >
          <H2 color="#000" margin="1rem 0 0.5rem 0">
            {this.props.posts[7].title.rendered}
          </H2>
          <P color="#000">{this.props.posts[6].title.rendered}</P>
        </div>
        <Line margin="0.5rem 0 1.25rem 1.5rem" backgroundColor="#000" />
        <Navbar className="only-desktop-nav" />
        <StyledPage>
          <Link href="/activities">
            <HomeCard
              style={
                isHighContrastMode
                  ? { background: 'var(--secondary-pink) url("../../static/images/BackgroundActivitiesSecondary.svg") no-repeat 40% 40%' }
                  : { background: 'var(--primary-pink) url("../../static/images/BackgroundActivitiesPrimary.svg") no-repeat 40% 40%' }
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
                  Aktivitet
                </SmallP>
                <img src="/static/images/gif-figur-aktivitet.gif" alt="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  height: '50%'
                }}
              >
                <H2 style={{ width: '75%' }}>
                  {this.props.posts[5].title.rendered}
                </H2>
                <ArrowRight />
              </div>
            </HomeCard>
          </Link>
          <Link href="/projects">
            <HomeCard
              style={
                isHighContrastMode
                  ? { background: 'var(--secondary-purple) url("../../static/images/BackgroundProjectSecondary.svg") no-repeat 40% 40%' }
                  : { background: 'var(--primary-purple) url("../../static/images/BackgroundProjectPrimary.svg") no-repeat 40% 40%' }
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
                  Projekt
                </SmallP>
                <img src="/static/images/projekt-figur.gif" alt="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  height: '50%'
                }}
              >
                <H2 style={{ width: '80%' }}>
                  {this.props.posts[4].title.rendered}
                </H2>
                <ArrowRight />
              </div>
            </HomeCard>
          </Link>
          <Link href="/contribute">
            <HomeCard
              style={
                isHighContrastMode
                  ? { background: 'var(--secondary-green) url("../../static/images/BackgroundContributeSecondary.svg") no-repeat 40% 40%' }
                  : { background: 'var(--primary-green) url("../../static/images/BackgroundContritubePrimary.svg") no-repeat 40% 40%' }
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
                  Bidra
                </SmallP>
                <img src="/static/images/bidra-figur.gif" alt="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  height: '50%'
                }}
              >
                <H2 style={{ width: '75%' }}>
                  {this.props.posts[3].title.rendered}
                </H2>
                <ArrowRight />
              </div>
            </HomeCard>
          </Link>
          <Link href="/social">
            <HomeCard
              style={
                isHighContrastMode
                  ? { background: 'var(--secondary-blue) url("../../static/images/BackgroundSocialSecondary.svg") no-repeat 40% 40%' }
                  : { background: 'var(--primary-blue) url("../../static/images/BackgroundSocialPrimary.svg") no-repeat 40% 40%' }
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
                  Socialt
                </SmallP>
                <img src="/static/images/social-figur.gif" alt="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  height: '50%'
                }}
              >
                <H2 style={{ width: '76%' }}>
                  {this.props.posts[2].title.rendered}
                </H2>
                <ArrowRight />
              </div>
            </HomeCard>
          </Link>
          <Link href="/information">
            <HomeCard
              style={
                isHighContrastMode
                  ? { background: 'var(--secondary-red) url("../../static/images/BackgroundInfoSecondary.svg") no-repeat 40% 40%' }
                  : { background: 'var(--primary-red) url("../../static/images/BackgroundInfoPrimary.svg") no-repeat 40% 40%' }
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
                  {this.props.info[0].type}
                </SmallP>
                <img src="/static/images/info-figur.gif" alt="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  height: '50%'
                }}
              >
                <H2 style={{ width: '77%' }}>
                  {this.props.posts[1].title.rendered}
                </H2>
                <ArrowRight />
              </div>
            </HomeCard>
          </Link>
          <Link href="/contact">
            <HomeCard
              style={
                isHighContrastMode
                  ? { background: 'var(--secondary-yellow) url("../../static/images/BackgroundContactSecondary.svg") no-repeat 40% 40%' }
                  : { background: 'var(--primary-yellow) url("../../static/images/BackgroundContactPrimary.svg") no-repeat 40% 40%' }
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
                  Kontakt
                </SmallP>
                <img src="/static/images/kontakt-figur.gif" alt="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  height: '50%'
                }}
              >
                <H2 style={{ width: '80%' }}>
                  {this.props.posts[0].title.rendered}
                </H2>
                <ArrowRight />
              </div>
            </HomeCard>
          </Link>
        </StyledPage>
        <Form
          formColor="var(--secondary-red)"
          title="Vill du kontakta oss?"
          name="Namn"
          phone="Telefonnummer"
          email="E-mail"
          submit="Skicka"
          subject="Ärende"
        />
      </Layout>
    );
  }
}

export default HomePage;
