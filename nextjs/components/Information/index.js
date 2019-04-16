import React, {Component} from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import NavIndicator from '../NavIndicator';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Card from '../Card';
import QuoteSmall from '../QuoteSmall';
import SmallP from '../SmallP';
import Line from '../Line';
import LetterBig from '../LetterBig';
import PostItCard from '../PostItCard';
import nookies from 'nookies';


import Link from 'next/link';
import PropTypes from 'prop-types';

class Information extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHighContrastMode: null
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
                <NavIndicator style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}}>
                    <LetterBig>I</LetterBig>
                    <div>
                        <SmallP style={{textTransform: "capitalize"}}>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link> > {this.props.info[0].type}</SmallP>
                        <H1 style={{textTransform: "capitalize"}}>{this.props.info[0].type}</H1>
                    </div>
                </NavIndicator>
                    {
                        this.props.info.map(item => {
                            return (


                                <Card key={item.id} style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}}>
                                <SmallP>{item.category}</SmallP>

                                <Line />

                                <H2>{item.title}</H2>
                                <P>{item.paragraph_1}</P>

                                <Line />

                                <QuoteSmall>"{item.quote}"</QuoteSmall>
                                <SmallP fontStyle="italic" textAlign="right" margin="15px 0 0 0">{item.author_quote}</SmallP>

                                <Line />

                                <P textIndent="16px">{item.paragraph_2}</P>
                                {/* <Line /> */}
                                </Card>
                            )
                        })
                    }
                    <PostItCard style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />

            </Layout>
        )
    }
}

export default Information;
