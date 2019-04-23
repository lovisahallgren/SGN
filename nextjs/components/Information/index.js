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
import nookies from 'nookies';
import PostItCard from '../PostItCard';
import ImageCard from '../ImageCard';
import Form from '../Form';
import InfoPrimaryFlap from '../SVGs/InfoPrimaryFlap';
import InfoSecondaryFlap from '../SVGs/InfoSecondaryFlap';

class Information extends Component {
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
              ? { background: 'var(--secondary-red)' }
              : { background: 'var(--primary-red)' }
          }
        >
          <img src="/static/images/info-figur-megafon.gif" alt="" />
          <div>
            <SmallP>
              <Link href="/">
                <a href="">Hem</a>
              </Link>{' '}
              > {this.props.info[0].type}
            </SmallP>
            <H1>{this.props.info[0].type}</H1>
          </div>
        </NavIndicator>
        <ImageCard border="var(--secondary-red)">
          <img
            src={this.props.info[0].image || undefined}
            alt={this.props.info[0].name}
            // border="5px solid var(--secondary-red)"
          />
          <SmallP
            color="var(--secondary-red)"
            margin="-0.5rem 0 0.5rem 0"
            fontWeight="bold"
          >
            {this.props.info[0].image_description}
          </SmallP>
        </ImageCard>
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background: 'var(--secondary-red)'
                }
              : {
                  background: 'var(--primary-red)'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <InfoSecondaryFlap />
            ) : (
              <InfoPrimaryFlap />
            ),
            category: this.props.info[0].category,
            content: this.props.info[0].title
          }}
          backFace={{
            flap: <InfoSecondaryFlap />,
            category: this.props.info[0].category,
            content: this.props.info[0].excerpt,
            background: 'var(--secondary-red)'
          }}
        />
        {this.props.info.map(item => {
          return (
            <div key={item.id}>
              <Card
                style={
                  isHighContrastMode
                    ? { background: 'var(--secondary-red)' }
                    : { background: 'var(--primary-red)' }
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
                            background: 'var(--secondary-red)',
                            borderTop: '2px solid var(--primary-red)'
                          }
                        : {
                            background: 'var(--primary-red)',
                            border: 'none'
                          }
                    }
                    topColor={
                      isHighContrastMode
                        ? 'var(--primary-red)'
                        : 'var(--secondary-red)'
                    }
                    bottomColor={
                      isHighContrastMode
                        ? 'var(--primary-tint-red)'
                        : 'var(--secondary-tint-red)'
                    }
                    display={'none'}
                    marginTop={isHighContrastMode ? '-2.1rem' : '-2rem'}
                  >
                    <ReadMoreCard
                      style={
                        isHighContrastMode
                          ? {
                              background: 'var(--secondary-red)',
                              borderTop: '2px solid var(--primary-red)'
                            }
                          : { background: 'var(--secondary-red)' }
                      }
                      background="var(--primary-red)"
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
          formColor="var(--secondary-red)"
          title="Har du några frågor eller funderingar?"
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

export default Information;
