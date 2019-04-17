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
import LetterBig from '../LetterBig';
import ReadMoreCard from '../ReadMoreCard';
import ReadMoreButton from '../ReadMoreButton';
import ArrowUp from '../SVGs/ArrowUp';
import Form from '../Form';
import ImageCard from '../ImageCard';
import nookies from 'nookies';

class Activities extends Component {
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
          <LetterBig>A</LetterBig>
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Home</a>
              </Link>{' '}
              > {this.props.activities[0].type}
            </SmallP>
            <H1>{this.props.activities[0].type}</H1>
          </div>
        </NavIndicator>
        {/* <ImageCard border="var(--secondary-pink)">
          <img
            src={this.props.activities[0].image || undefined}
            alt={this.props.activities[0].name}
            // border="5px solid var(--secondary-pink)"
          />
          <SmallP
            color="var(--secondary-pink)"
            margin="-0.5rem 0 0.5rem 0"
            fontWeight="bold"
          >
            {this.props.activities[0].image_description}
          </SmallP>
        </ImageCard> */}
        <Card>
          <H2 color="#000">{this.props.activities[0].title}</H2>
          <P color="#000">{this.props.activities[0].excerpt}</P>
          <Line backgroundColor="#000" />
        </Card>
        {this.props.activities.map(item => {
          return (
            <div key={item.id}>
              <Card
                style={
                  isHighContrastMode
                    ? { background: 'var(--secondary-pink)' }
                    : { background: 'var(--primary-pink)' }
                }
              >
                <SmallP>{item.category}</SmallP>
                <Line />
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
                      {item.quote !== '' && (
                        <div>
                          <Line />
                          <QuoteSmall style={{ marginTop: '1rem' }}>
                            "{item.quote}"
                          </QuoteSmall>
                        </div>
                      )}
                      <SmallP
                        fontStyle="italic"
                        textAlign="right"
                        margin="1rem 0"
                      >
                        {item.quote_name}
                      </SmallP>
                      <Line />
                      <P>{item.content}</P>
                    </ReadMoreCard>
                  </ReadMoreButton>
                  {item.image === false ? null : (
                    <ImageCard border="var(--secondary-pink)">
                      <img src={item.image || undefined} alt={item.name} />
                      <SmallP
                        color="var(--secondary-pink)"
                        margin="-0.5rem 0 0.5rem 0"
                        fontWeight="bold"
                      >
                        {item.image_description}
                      </SmallP>
                    </ImageCard>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
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

export default Activities;
