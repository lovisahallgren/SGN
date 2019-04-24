import React, { Component } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import NavIndicator from '../NavIndicator';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Card from '../Card';
import SmallP from '../SmallP';
import Line from '../Line';
import Link from 'next/link';
import PropTypes from 'prop-types';
import nookies from 'nookies';
import PostItCard from '../PostItCard';
import ProjectPrimaryFlap from '../SVGs/ProjectPrimaryFlap';
import ProjectSecondaryFlap from '../SVGs/ProjectSecondaryFlap';
import ArrowRight from '../SVGs/ArrowRight';
import Instagram from '../SVGs/Instagram';
import Facebook from '../SVGs/Facebook';
import Youtube from '../SVGs/Youtube';

class SocialPage extends Component {
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
      <Layout
        isHighContrastMode={isHighContrastMode}
        handleContrastMode={this.handleContrastMode}
      >
        <NavIndicator
          style={
            isHighContrastMode
              ? { background: 'var(--secondary-blue)' }
              : { background: 'var(--primary-blue)' }
          }
        >
          <img src="/static/images/social-figur.gif" alt="" />
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Hem</a>
              </Link>{' '}
              > Socialt
            </SmallP>
            <H1>Socialt</H1>
          </div>
        </NavIndicator>
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background: 'var(--secondary-blue) url("../../static/images/BackgroundSocialSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background: 'var(--primary-blue) url("../../static/images/BackgroundSocialPrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ProjectSecondaryFlap />
            ) : (
              <ProjectPrimaryFlap />
            ),
            category: 'Inledning',
            content:
              'Vi publicerar nyheter och händelser på facebook, instagram och youtube. '
          }}
          backFace={{
            flap: <ProjectSecondaryFlap />,
            category: 'Besök oss gärna på',
            content: (
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <Facebook /> <Youtube /> <Instagram />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textDecoration: 'underline',
                    marginTop: '0.5rem',
                  }}
                >
                  <SmallP>Facebook</SmallP> <SmallP>Youtube</SmallP>{' '}
                  <SmallP>Instagram</SmallP>{' '}
                </div>
              </div>
            ),
            background: 'var(--secondary-blue)',
            buttonColor: 'var(--primary-blue)'
          }}
        />
        <Card
          style={
            isHighContrastMode
              ? { background: 'var(--secondary-blue) url("../../static/images/BackgroundSocialSecondary.svg") no-repeat 40% 40%' }
              : { background: 'var(--primary-blue) url("../../static/images/BackgroundSocialPrimary.svg") no-repeat 40% 40%' }
          }
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <SmallP>Instagram</SmallP>
            <Instagram margin="0" />
          </div>
          <Line />
          <img
            src="/static/images/instagram-image.jpg"
            alt=""
            style={{ width: '100%', margin: '0 0 1rem 0' }}
          />
          <Line />
          <a href="https://www.instagram.com/support.group.network/">
            <P style={{ textDecoration: 'underline' }}>
              Gå vidare till Instagram
              <ArrowRight width="5%" margin="0 0 -0.1rem 7rem" fill="#fff" />
            </P>
          </a>
        </Card>
        <Card
          style={
            isHighContrastMode
              ? { background: 'var(--secondary-blue) url("../../static/images/BackgroundSocialSecondary.svg") no-repeat 40% 40%' }
              : { background: 'var(--primary-blue) url("../../static/images/BackgroundSocialPrimary.svg") no-repeat 40% 40%' }
          }
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <SmallP>Facebook</SmallP>
            <Facebook margin="0" />
          </div>
          <Line />
          <img
            src="/static/images/facebook-image.jpg"
            alt=""
            style={{ width: '100%', margin: '0 0 1rem 0' }}
          />
          <SmallP>Aug 22, 2013</SmallP>
          <H2>Senaste inlägg</H2>
          <P>
            Support Group Network (SGN) erbjuder bland annat psykologiskt stöd i
            form av behovsbaserade och meningsfulla aktiviteter, under deras
            långa väntan.
          </P>
          <Line />
          <a href="https://www.facebook.com/SupportRestadGard/">
            <P style={{ textDecoration: 'underline' }}>
              Gå vidare till Facebook
              <ArrowRight width="5%" margin="0 0 -0.1rem 7rem" fill="#fff" />
            </P>
          </a>
        </Card>
      </Layout>
    );
  }
}

export default SocialPage;
