import React, { Component } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavIndicator from '../NavIndicator';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Card from '../Card';
import QuoteSmall from '../QuoteSmall';
import SmallP from '../SmallP';
import Line from '../Line';
import ReadMoreCard from '../ReadMoreCard';
import ReadMoreButton from '../ReadMoreButton';
import Form from '../Form';
import ImageCard from '../ImageCard';
import nookies from 'nookies';
import PostItCard from '../PostItCard';
import ActivitiesPrimaryFlap from '../SVGs/ActivitiesPrimaryFlap';
import ActivitiesSecondaryFlap from '../SVGs/ActivitiesSecondaryFlap';
class ActivitiesPage extends Component {
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
              ? { background: 'var(--secondary-pink)' }
              : { background: 'var(--primary-pink)' }
          }
        >
          <img src="/static/images/gif-figur-aktivitet.gif" alt="" />
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Hem</a>
              </Link>{' '}
              > Aktivitet
            </SmallP>
            <H1>Aktivitet</H1>
          </div>
        </NavIndicator>
        <ImageCard border="var(--secondary-pink)">
          <img
            src={this.props.activities[3].image || undefined}
            alt={this.props.activities[3].name}
            // border="5px solid var(--secondary-pink)"
          />
          <SmallP
            color="var(--secondary-pink)"
            margin="-0.5rem 0 0.5rem 0"
            fontWeight="bold"
          >
            {this.props.activities[3].image_description}
          </SmallP>
        </ImageCard>

        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-pink) url("../../static/images/BackgroundActivitiesSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-pink) url("../../static/images/BackgroundActivitiesPrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ActivitiesSecondaryFlap />
            ) : (
              <ActivitiesPrimaryFlap />
            ),
            category: this.props.postit[5].category,
            content: this.props.postit[5].front
          }}
          backFace={{
            flap: <ActivitiesSecondaryFlap />,
            category: this.props.postit[5].category,
            content: this.props.postit[5].back,
            background: 'var(--secondary-pink)'
          }}
        />
        {this.props.activities.map(item => {
          return (
            <div key={item.id}>
              <Card
                style={
                  isHighContrastMode
                    ? {
                        background:
                          'var(--secondary-pink) url("../../static/images/BackgroundActivitiesSecondary.svg") no-repeat 40% 40%'
                      }
                    : {
                        background:
                          'var(--primary-pink) url("../../static/images/BackgroundActivitiesPrimary.svg") no-repeat 40% 40%'
                      }
                }
              >
                <SmallP>{item.category}</SmallP>
                <Line />

                {item.image === false ? null : (
                  <img
                    src={item.image || undefined}
                    alt={item.name}
                    style={{
                      width: '100%',
                      margin: '1rem 0 2rem 0',
                      objectFit: 'cover',
                      objectPosition: '50% 50%'
                    }}
                  />
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
                            background: 'var(--secondary-pink)',
                            borderTop: '2px solid var(--primary-pink)'
                          }
                        : {
                            background: 'var(--primary-pink)',
                            border: 'none'
                          }
                    }
                    topColor={
                      isHighContrastMode
                        ? 'var(--primary-pink)'
                        : 'var(--secondary-pink)'
                    }
                    bottomColor={
                      isHighContrastMode
                        ? 'var(--primary-tint-pink)'
                        : 'var(--secondary-tint-pink)'
                    }
                    display={'none'}
                    marginTop={isHighContrastMode ? '-2.1rem' : '-2rem'}
                  >
                    <ReadMoreCard
                      style={
                        isHighContrastMode
                          ? {
                              background: 'var(--secondary-pink)',
                              borderTop: '2px solid var(--primary-pink)'
                            }
                          : { background: 'var(--secondary-pink)' }
                      }
                      background="var(--primary-pink)"
                    >
                      {item.image_2 === false ? null : (
                        <div>
                          <img
                            src={item.image_2 || undefined}
                            alt={item.name}
                            style={{
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: '50% 50%'
                            }}
                          />
                          <SmallP margin="0.5rem 0 0.5rem 0" fontWeight="bold">
                            {item.image_description}
                          </SmallP>
                        </div>
                      )}
                      <Line />
                      <P>{item.content}</P>
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
                      <P>{item.paragraph_2}</P>
                      <Line />
                    </ReadMoreCard>
                  </ReadMoreButton>
                </div>
              ) : null}
            </div>
          );
        })}
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-pink) url("../../static/images/BackgroundActivitiesSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-pink) url("../../static/images/BackgroundActivitiesPrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ActivitiesSecondaryFlap />
            ) : (
              <ActivitiesPrimaryFlap />
            ),
            category: this.props.activities[2].category,
            content: this.props.activities[3].content
          }}
          backFace={{
            flap: <ActivitiesSecondaryFlap />,
            category: this.props.activities[0].category,
            content: this.props.activities[0].excerpt,
            background: 'var(--secondary-pink)'
          }}
        />
        <Form
          formColor="var(--secondary-pink)"
          title="Skulle du vilja delta eller starta en aktivitet?"
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

export default ActivitiesPage;
