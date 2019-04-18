import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import H2 from '../H2';
import P from '../P';

const StyledCookiePolicy = styled.div`
  width: 110%;
  height: 70vh;
  position: sticky;
  bottom: 0;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 1px solid #000;
  border-top: 15px solid var(--secondary-red);
  text-align: center;
  margin: 1rem 0rem 0 -1rem;

  button {
    width: 50%;
    height: 15%;
    color: #fff;
    font-size: 1rem;
    border: none;
    background: var(--secondary-red);
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  div {
    /* width: 80%; */
    height: 40%;
  }
`;

const CookiePolicy = props => {
  // console.log(props);
  return (
    <StyledCookiePolicy>
      <div>
        <H2 color="#000">Din data, ditt val.</H2>
        <P color="#000">
          When you use our website, data are collected using cookies.
        </P>
      </div>
      <button onClick={props.onAccept}>Jag förstår</button>
      <Link href="/gdpr">
        <P color="#000">Mer information</P>
      </Link>
    </StyledCookiePolicy>
  );
};

CookiePolicy.propTypes = {};

export default CookiePolicy;
