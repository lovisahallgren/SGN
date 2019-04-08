import React, {Component} from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import H1 from '../H1';
import Card from '../Card';
import Navbar from '../Navbar';

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
        <Navbar contrast={this.state.isHighContrastMode} style={{position: "static", display: "block", marginTop: "17%", fontWeight: "bold"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={this.state.isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
      </Layout>

    )
  }
}

export default Information;
