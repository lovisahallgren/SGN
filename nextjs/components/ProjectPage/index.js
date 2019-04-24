import React, { Component } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import NavIndicator from '../NavIndicator';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Card from '../Card';
import QuoteSmall from '../QuoteSmall';
import QuoteBig from '../QuoteBig';
import SmallP from '../SmallP';
import Line from '../Line';
import LetterBig from '../LetterBig';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ReadMoreCard from '../ReadMoreCard';
import ReadMoreButton from '../ReadMoreButton';
import ArrowUp from '../SVGs/ArrowUp';
import nookies from 'nookies';
import Form from '../Form';
import ImageCard from '../ImageCard';
import PostItCard from '../PostItCard';
import ProjectPrimaryFlap from '../SVGs/ProjectPrimaryFlap';
import ProjectSecondaryFlap from '../SVGs/ProjectSecondaryFlap';

class ProjectPage extends Component {
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
              ? { background: 'var(--secondary-purple)' }
              : { background: 'var(--primary-purple)' }
          }
        >
          <img src="/static/images/projekt-figur.gif" alt="" />
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Hem</a>
              </Link>{' '}
              > Projekt
            </SmallP>
            <H1>Projekt</H1>
          </div>
        </NavIndicator>
        <ImageCard border="var(--secondary-purple)">
          <img
            src={this.props.projects[0].image || undefined}
            alt={this.props.projects[0].name}
            // border="5px solid var(--secondary-purple)"
          />
          <SmallP
            color="var(--secondary-purple)"
            margin="-0.5rem 0 0.5rem 0"
            fontWeight="bold"
          >
            {this.props.projects[0].image_description}
          </SmallP>
        </ImageCard>
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-purple) url("../../static/images/BackgroundProjectSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-purple) url("../../static/images/BackgroundProjectPrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ProjectSecondaryFlap />
            ) : (
              <ProjectPrimaryFlap />
            ),
            category: this.props.info[0].category,
            content: this.props.info[0].content
          }}
          backFace={{
            flap: <ProjectSecondaryFlap />,
            category: this.props.info[0].category,
            content: this.props.info[0].content,
            background: 'var(--secondary-purple)'
          }}
        />

        {this.props.projects.map(item => {
          return (
            <div key={item.id}>
              <Card
                style={
                  isHighContrastMode
                    ? {
                        background:
                          'var(--secondary-purple) url("../../static/images/BackgroundProjectSecondary.svg") no-repeat 40% 40%'
                      }
                    : {
                        background:
                          'var(--primary-purple) url("../../static/images/BackgroundProjectPrimary.svg") no-repeat 40% 40%'
                      }
                }
              >
                <SmallP>{item.project_name}</SmallP>
                <Line />
                {item.logo === false ? null : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '2rem'
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      style={{
                        width: '100%'
                      }}
                    />
                  </div>
                )}
                <H2>{item.title}</H2>
                <P>{item.excerpt}</P>
                <Line />
              </Card>
              {item.image !== null ||
              item.image_description !== null ||
              item.content !== null ||
              item.quote !== null ||
              item.quote_name !== null ? (
                <div>
                  <ReadMoreButton
                    style={
                      isHighContrastMode
                        ? {
                            background: 'var(--secondary-purple)',
                            borderTop: '2px solid var(--primary-purple)'
                          }
                        : {
                            background: 'var(--primary-purple)',
                            border: 'none'
                          }
                    }
                    topColor={
                      isHighContrastMode
                        ? 'var(--primary-purple)'
                        : 'var(--secondary-purple)'
                    }
                    bottomColor={
                      isHighContrastMode
                        ? 'var(--primary-tint-purple)'
                        : 'var(--secondary-tint-purple)'
                    }
                    display={'none'}
                    marginTop={isHighContrastMode ? '-2.1rem' : '-2rem'}
                  >
                    <ReadMoreCard
                      style={
                        isHighContrastMode
                          ? {
                              background: 'var(--secondary-purple)',
                              borderTop: '2px solid var(--primary-purple)'
                            }
                          : { background: 'var(--secondary-purple)' }
                      }
                      background="var(--primary-purple)"
                    >
                      {item.image === false ? null : (
                        <div>
                          <img
                            src={item.image || undefined}
                            alt={item.name}
                            style={{ width: '100%' }}
                          />
                          <SmallP margin="0.5rem 0 0.5rem 0" fontWeight="bold">
                            {item.image_description}
                          </SmallP>
                        </div>
                      )}
                      {item.quote !== '' ? (
                        <div>
                          <Line />
                          <QuoteSmall style={{ marginTop: '1rem' }}>
                            "{item.quote}"
                          </QuoteSmall>
                          <SmallP
                            fontStyle="italic"
                            textAlign="right"
                            margin="1rem 0"
                          >
                            {item.quote_name}
                          </SmallP>
                        </div>
                      ) : null}
                      <Line />
                      <P>{item.content}</P>
                    </ReadMoreCard>
                  </ReadMoreButton>
                </div>
              ) : null}
            </div>
          );
        })}
        <Form
          formColor="var(--secondary-purple)"
          title="Vill du engagera dig i våra projekt?"
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

export default ProjectPage;
