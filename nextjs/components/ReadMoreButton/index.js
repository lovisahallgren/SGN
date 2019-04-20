import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import nookies from 'nookies';
import ReadMoreCard from '../ReadMoreCard';
import ArrowUp from '../SVGs/ArrowUp';
import ArrowDown from '../SVGs/ArrowDown';

const StyledReadMoreButton = styled.button`
  width: 100%;
  height: 5%;
  position: relative;
  top: 0rem;
  padding: 1rem;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: ${props => props.textAlign || 'left'};
  background-color: ${props => props.background || 'white'};
  border-bottom: none;
  border-right: none;
  border-left: none;
  display: flex;
  justify-content: space-between;
  transition: height 0.25s ease;

  div {
    width: 100%;
    height: 0%;
    left: 0;
    background-color: #fff;
    position: absolute;
    margin-top: ${props => props.marginTop || '-2rem'};
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${props => props.topColor || 'white'};
    border-top: 0.5rem solid ${props => props.bottomColor || 'white'};
    display: ${props => props.display || 'block'};
  }
`;

class ReadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isHighContrastMode: null,
      isExpanded: false
    };

    this.expandReadMore = this.expandReadMore.bind(this);
  }

  expandReadMore() {
    this.setState(prevState => {
      return {
        isExpanded: !prevState.isExpanded
      };
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {this.state.isExpanded && children}
        <StyledReadMoreButton
          onClick={this.expandReadMore}
          style={this.props.style}
          topColor={this.props.topColor}
          bottomColor={this.props.bottomColor}
          display={this.state.isExpanded ? this.props.display : null}
          marginTop={this.props.marginTop}
        >
          <div />
          {this.state.isExpanded ? 'Minimera' : 'Expandera'}
          {this.state.isExpanded ? <ArrowUp /> : <ArrowDown />}
        </StyledReadMoreButton>
      </div>
    );
  }
}

ReadMoreButton.propTypes = {};

export default ReadMoreButton;
