import React, { Component } from 'react';
import styled from 'styled-components';
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
import Form from '../Form';
import PostItCard from '../PostItCard';
import ContactPrimaryFlap from '../SVGs/ContactPrimaryFlap';
import ContactSecondaryFlap from '../SVGs/ContactSecondaryFlap';
import Facebook from '../SVGs/Facebook';
import Youtube from '../SVGs/Youtube';
import Instagram from '../SVGs/Instagram';

class ContactPage extends Component {
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
              ? { background: 'var(--secondary-yellow)' }
              : { background: 'var(--primary-yellow)' }
          }
        >
          <img src="/static/images/kontakt-figur.gif" alt="" />
          <div style={{ alignItems: 'flex-end' }}>
            <SmallP>
              <Link href="/">
                <a href="">Hem</a>
              </Link>{' '}
              > Kontakt
            </SmallP>
            <H1>Kontakt</H1>
          </div>
        </NavIndicator>
        <PostItCard
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-yellow) url("../../static/images/BackgroundContactSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-yellow) url("../../static/images/BackgroundContactPrimary.svg") no-repeat 40% 40%'
                }
          }
          frontFace={{
            flap: isHighContrastMode ? (
              <ContactSecondaryFlap />
            ) : (
              <ContactPrimaryFlap />
            ),
            category: this.props.contact[0].category,
            content: this.props.contact[0].title
          }}
          backFace={{
            flap: <ContactSecondaryFlap />,
            category: this.props.contact[0].category,
            content: this.props.contact[0].excerpt,
            background: 'var(--secondary-yellow)'
          }}
        />
        <Card
          style={
            isHighContrastMode
              ? {
                  background:
                    'var(--secondary-yellow) url("../../static/images/BackgroundContactSecondary.svg") no-repeat 40% 40%'
                }
              : {
                  background:
                    'var(--primary-yellow) url("../../static/images/BackgroundContactPrimary.svg") no-repeat 40% 40%'
                }
          }
        >
          <SmallP style={{ textTransform: 'none' }}>
            {this.props.contact[0].category}
          </SmallP>
          <Line />
          <SmallP>Ring</SmallP>
          <H2>{this.props.contact[0].phone}</H2>
          <br />
          <SmallP>Maila</SmallP>
          <H2>{this.props.contact[0].email}</H2>
          <br />
          <SmallP style={{ textTransform: 'none' }}>Sociala medier</SmallP>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '0.5rem'
            }}
          >
            <Facebook />
            <Youtube />
            <Instagram />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <SmallP textDecoration="underline">Facebook</SmallP>
            <SmallP textDecoration="underline">Youtube</SmallP>
            <SmallP textDecoration="underline">Instagram</SmallP>
          </div>
          <Line />
        </Card>
        <Form
          formColor="var(--secondary-yellow)"
          title="Tveka inte en sekund att kontakta oss!"
          name="Namn"
          phone="Telefonnummer"
          email="E-mail"
          submit="Skicka"
          subject="Ditt meddelande"
        />
      </Layout>
    );
  }
}

export default ContactPage;
