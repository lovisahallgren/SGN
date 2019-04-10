import React, {Component} from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import H1 from '../H1';
import Card from '../Card';
import Navbar from '../Navbar';
import nookies from 'nookies';

import Link from 'next/link';
import PropTypes from 'prop-types';

class Home extends Component {
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
      <Layout>
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
        <Card style={isHighContrastMode ? {background: "var(--secondary-red)"} : {background: "var(--primary-red)"}} />
      </Layout>

    )
  }
}

export default Home;
