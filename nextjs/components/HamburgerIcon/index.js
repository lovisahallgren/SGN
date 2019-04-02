import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburgerIcon = styled.div`
  /* width: 10%;
  height: 5%; */
  display: flex;
  flex-direction: column;
  text-align: center;
`

const HamburgerIcon = (props) => {
    return(
      <StyledHamburgerIcon onClick={props.onClick}>
        <span>___</span>
        <span>___</span>
        <span>___</span>
      </StyledHamburgerIcon>
    )
  }
// }

HamburgerIcon.propTypes = {

};

export default HamburgerIcon;
