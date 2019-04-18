import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../H2';
import P from '../P';
import GlobalStyle from '../../styles';

const GDPR = props => {
  return (
    <div>
      <GlobalStyle />
      <H2 color="#000">HAVING YOUR PERSONAL DATA ACCORDING TO GDPR</H2>
    </div>
  );
};

GDPR.propTypes = {
  text: PropTypes.string
};

export default GDPR;
