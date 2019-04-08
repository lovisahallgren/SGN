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

class Information extends Component {
    constructor() {
        super();
        this.state = {
        isHighContrastMode: false,
        }

        this.handleContrastMode = this.handleContrastMode.bind(this);
    }

    handleContrastMode() {
        console.log('clicked')
        this.setState(prevState => {
        return {
            isHighContrastMode: !prevState.isHighContrastMode,
        }
        })
    }

    render() {
        return(
            <Layout isHighContrastMode={this.state.isHighContrastMode} handleContrastMode={this.handleContrastMode}>
                <NavIndicator style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}}>
                    <LetterBig>I</LetterBig>
                    <div>
                        <SmallP style={{textTransform: "capitalize"}}>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link> > {this.props.info[0].type}</SmallP>
                        <H1>Info</H1>
                    </div>
                </NavIndicator>
                    {
                        this.props.info.map(item => {
                            return (
                                <Card key={item.id} style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}}>
                                <SmallP>{item.category}</SmallP>
                                <Line />
                                <H2>{item.title}</H2>
                                <P>{item.paragraph_1}</P>
                                <Line />
                                <QuoteSmall>"{item.quote}"</QuoteSmall>
                                <SmallP fontStyle="italic" textAlign="right" margin="15px 0 0 0">{item.author_quote}</SmallP>
                                <Line />
                                <P>{item.paragraph_2}</P>
                                {/* <Line /> */}
                                </Card>
                            )
                        })
                    }
            </Layout>
        )
    }
}

export default Information;
