import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  /* height: 10%; */
	justify-content: flex-start;
	/* align-items: flex-start; */
	cursor: pointer;
	/* padding: 4px;
	grid-column: 5; */

  & div {
    height: 4px;
    width: 27px;
    background: #000;
    transition: all 0.2 s ease;
    margin-bottom: 5px;
  }
`

const HamburgerIcon = (props) => {
    return(
      <Wrapper onClick={props.onClick}>
        <div />
        <div />
        <div />
      </Wrapper>
    )
  }
// }

HamburgerIcon.propTypes = {

};

export default HamburgerIcon;
