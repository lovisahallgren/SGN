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
import PostItCard from '../PostItCard';

class Project extends Component {
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
          <LetterBig>P</LetterBig>
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Home</a>
              </Link>{' '}
              > {this.props.projects[0].type}
            </SmallP>
            <H1>{this.props.projects[0].type}</H1>
          </div>
        </NavIndicator>
        <PostItCard
          style={
            isHighContrastMode
              ? { background: 'var(--secondary-purple)' }
              : { background: 'var(--primary-purple)' }
          }
        />
        {this.props.projects.map(item => {
          return (
            <div key={item.id}>
              <Card
                style={
                  isHighContrastMode
                    ? { background: 'var(--secondary-purple)' }
                    : { background: 'var(--primary-purple)' }
                }
              >
                <SmallP>{item.project_name}</SmallP>
                <Line />
                {item.image === false ? null : (
                  <div>
                    <img
                      src={item.logo}
                      alt={item.name}
                      style={{ width: '50%', margin: '0 0 1rem 0' }}
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
                          <img src={item.image || undefined} alt={item.name} />
                          <div style={{ display: 'flex' }}>
                            <ArrowUp />
                            <P
                              style={{
                                marginTop: '-0.7rem',
                                fontWeight: 'bold',
                                width: '100%'
                              }}
                            >
                              {item.image_description}
                            </P>
                          </div>
                        </div>
                      )}
                      {item.quote !== '' ? (
                        <div>
                          <Line />
                          <QuoteSmall style={{ marginTop: '1rem' }}>
                            "{item.quote}"
                          </QuoteSmall>
                        </div>
                      ) : null}
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
                </div>
              ) : null}
            </div>
          );
        })}
        <QuoteBig color="#000" margin="2rem 0 1rem 0">
          "{this.props.projects[1].quote}"
        </QuoteBig>
        <SmallP color="#000" textAlign="right" margin="1rem">
          {this.props.projects[1].quote_name}
        </SmallP>
        <Form
          formColor="var(--secondary-tint-purple)"
          title="Vill du engagera dig i vårt project?"
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

export default Project;
