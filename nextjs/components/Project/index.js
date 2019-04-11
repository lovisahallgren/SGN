import React, {Component} from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import NavIndicator from '../NavIndicator';
import H1 from '../H1'
import H2 from '../H2'
import P from '../P'
import Card from '../Card'
import QuoteSmall from '../QuoteSmall'
import SmallP from '../SmallP'
import Line from '../Line'
import LetterBig from '../LetterBig'
import Link from 'next/link';
import PropTypes from 'prop-types';
import ReadMoreCard from '../ReadMoreCard';
import ReadMoreButton from '../ReadMoreButton';
import nookies from 'nookies';
class Project extends Component {
  constructor(props) {
      super(props);
      this.state = {
      isHighContrastMode: null,
      }

  }

  componentDidMount() {
    this.setState({
      isHighContrastMode: nookies.get(this.state.ctx).contrast === "true" ? "true" : "false"
    })
  }

  render() {
  const isHighContrastMode = this.state.isHighContrastMode === "true"

  return(
      <Layout isHighContrastMode={isHighContrastMode} handleContrastMode={this.handleContrastMode}>
          <NavIndicator style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
              <LetterBig>P</LetterBig>
              <div>
                  <SmallP style={{textTransform: "capitalize"}}>
                  <Link href={"/"}>
                      <a href="">Home</a>
                  </Link> > {this.props.projects[0].type}</SmallP>
                  <H1 style={{textTransform: "capitalize"}}>{this.props.projects[0].type}</H1>
              </div>
          </NavIndicator>
          {
              this.props.projects.map(item => {
                  return (
                    <div key={item.id}>
                      <Card style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
                      <SmallP>{item.name}</SmallP>
                      <Line />
                      <img src={item.logo} alt={item.name}/>
                      <H2>{item.title}</H2>
                      <P>{item.description}</P>
                      <Line />
                      {item.quote !== "" ? <QuoteSmall>"{item.quote}"</QuoteSmall> : null}
                      <SmallP fontStyle="italic" textAlign="right" margin="15px 0 0 0">{item.author_quote}</SmallP>
                      <Line />

                      </Card>
                      {item.read_more_image !== null ||
                        item.read_more_image_description !== null ||
                        item.read_more_paragraph !== null ||
                        item.read_more_quote !== null ? <ReadMoreButton />
                      // <ReadMoreCard style={isHighContrastMode ? {background: "var(--primary-purple)"} : {background: "var(--secondary-purple)"}}>
                      //   <img src={item.read_more_image || undefined} alt={item.name}/>
                      //   <P>{item.read_more_image_description}</P>
                      //   <P>{item.read_more_paragraph}</P>
                      //   {item.quote !== "" ? <QuoteSmall>"{item.quote}"</QuoteSmall> : null}
                      //   <SmallP fontStyle="italic" textAlign="right" margin="15px 0 0 0">{item.read_more_author_quote}</SmallP>
                      //   <Line />
                      // </ReadMoreCard>
                      : null}

                      </div>
                  )
              })
          }
      </Layout>
    )
  }
}

export default Project;
