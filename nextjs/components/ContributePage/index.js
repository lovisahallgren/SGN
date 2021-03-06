import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../Layout';
import NavIndicator from '../NavIndicator';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Card from '../Card';
import QuoteSmall from '../QuoteSmall';
import SmallP from '../SmallP';
import Line from '../Line';
import Link from 'next/link';
import ReadMoreCard from '../ReadMoreCard';
import ReadMoreButton from '../ReadMoreButton';
import nookies from 'nookies';
import Form from '../Form';
import ImageCard from '../ImageCard';
import PostItCard from '../PostItCard';
import ContributePrimaryFlap from '../SVGs/ContributePrimaryFlap';
import ContributeSecondaryFlap from '../SVGs/ContributeSecondaryFlap';

class ContributePage extends Component {
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
              ? { background: 'var(--secondary-green)' }
              : { background: 'var(--primary-green)' }
          }
        >
          <img src="/static/images/bidra-figur.gif" alt="" />
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Hem</a>
              </Link>{' '}
              > Bidra
            </SmallP>
            <H1>Bidra</H1>
          </div>
        </NavIndicator>
        <ImageCard border="var(--secondary-green)">
          <img
            src={this.props.contribute[0].image || undefined}
            alt={this.props.contribute[0].name}
          />
          <SmallP
            color="var(--secondary-green)"
            margin="-0.5rem 0 0.5rem 0"
            fontWeight="bold"
          >
            {this.props.contribute[0].image_description}
          </SmallP>
        </ImageCard>
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-green) url("../../static/images/BackgroundContributeSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-green) url("../../static/images/BackgroundContritubePrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ContributeSecondaryFlap />
            ) : (
              <ContributePrimaryFlap />
            ),
            category: this.props.contribute[0].category,
            content: this.props.contribute[0].excerpt
          }}
          backFace={{
            flap: <ContributeSecondaryFlap />,
            category: this.props.contribute[0].category,
            content: this.props.contribute[0].title,
            background: 'var(--secondary-green)',
            buttonColor: 'var(--primary-green)'
          }}
        />

        {this.props.contribute.map(item => {
          return (
            <div key={item.id}>
              <Card
                style={
                  isHighContrastMode
                    ? {
                        background:
                          'var(--secondary-green) url("../../static/images/BackgroundContributeSecondary.svg") no-repeat 40% 40%'
                      }
                    : {
                        background:
                          'var(--primary-green) url("../../static/images/BackgroundContritubePrimary.svg") no-repeat 40% 40%'
                      }
                }
              >
                <SmallP>{item.category}</SmallP>
                <Line />
                {item.image === false ? null : (
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '100%',
                        margin: '0 0 1rem 0',
                        objectFit: 'cover',
                        objectPosition: '50% 50%'
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
                            background: 'var(--secondary-green)',
                            borderTop: '2px solid var(--primary-green)'
                          }
                        : {
                            background: 'var(--primary-green)',
                            border: 'none'
                          }
                    }
                    topColor={
                      isHighContrastMode
                        ? 'var(--primary-green)'
                        : 'var(--secondary-green)'
                    }
                    bottomColor={
                      isHighContrastMode
                        ? 'var(--primary-tint-green)'
                        : 'var(--secondary-tint-green)'
                    }
                    display={'none'}
                    marginTop={isHighContrastMode ? '-2.1rem' : '-2rem'}
                  >
                    <ReadMoreCard
                      style={
                        isHighContrastMode
                          ? {
                              background: 'var(--secondary-green)',
                              borderTop: '2px solid var(--primary-green)'
                            }
                          : { background: 'var(--secondary-green)' }
                      }
                      background="var(--primary-green)"
                    >
                      {item.image === false ? null : (
                        <div>
                          <img
                            src={item.image || undefined}
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
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-green) url("../../static/images/BackgroundContributeSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-green) url("../../static/images/BackgroundContritubePrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ContributeSecondaryFlap />
            ) : (
              <ContributePrimaryFlap />
            ),
            category: this.props.contribute[0].category,
            content: this.props.contribute[0].content
          }}
          backFace={{
            flap: <ContributeSecondaryFlap />,
            category: this.props.contribute[0].category,
            content: this.props.contribute[0].title,
            background: 'var(--secondary-green)'
          }}
        />
        <Form
          formColor="var(--secondary-green)"
          title="Hur vill du bidra?"
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

export default ContributePage;
