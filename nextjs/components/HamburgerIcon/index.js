import Link from 'next/link';
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 10%;

  span {
    height: 15%;
  }
`

const HamburgerIcon = (props) => {
    return(
      <StyledHamburgerIcon onClick={props.onClick}>
        <span>__</span>
        <span>__</span>
        <span>__</span>
      </StyledHamburgerIcon>
    )
  }
// }

HamburgerIcon.propTypes = {

};

export default HamburgerIcon;
