import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCookiePolicy = styled.div`
  width: 100%;
  height: 8vh;
  position: sticky;
  top: 7%;
  background: blue;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  button {
    width: 50%;
    height: 50%;
    color: #fff;
    font-size: 1rem;
    border: 1px solid black;
    background: none;
  }
`;

const CookiePolicy = props => {
  // console.log(props);
  return (
    <StyledCookiePolicy>
      <button onClick={props.onAccept}>Jag förstår</button>
    </StyledCookiePolicy>
  );
};

CookiePolicy.propTypes = {};

export default CookiePolicy;
