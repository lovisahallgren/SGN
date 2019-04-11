import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import nookies from 'nookies';
import ReadMoreCard from '../ReadMoreCard';

const StyledReadMoreButton = styled.button`
  width: 100%;
  height: 5%;
  position: relative;
  top: -1rem;
  padding: 1rem;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: ${props => props.textAlign || 'left'};
  border: 2px solid purple;
  /* position: absolute; */
  /* background: ${props => props.background || 'white'}; */
  /* border-top: 5px solid green; */
/*
  span {
    display: block;
    color: ${props => props.color || 'white'};
  } */
`;

// const Button = (props) => {
//   const childre =
//   return (
//     <StyledButton style={props.style}>
//       {children}
//     </StyledButton>
//   )
// }

class ReadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null,
      isExpanded: false,
    }

    this.expandReadMore = this.expandReadMore.bind(this);
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode: nookies.get(this.state.ctx).contrast === "true" ? "true" : "false"
    })
  }

  expandReadMore() {
    this.setState(prevState => {
      return {
        isExpanded: !prevState.isExpanded,
      }
    })
  }

  render() {
    console.log(this.state.isExpanded);
    const { children } = this.props;
    const isHighContrastMode = this.state.isHighContrastMode === "true"
    return (
     <div>
       {this.state.isExpanded ? <ReadMoreCard></ReadMoreCard> : null}
        <StyledReadMoreButton onClick={this.expandReadMore} style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
          Läs mer
        </StyledReadMoreButton>
      </div>
    );
  }
}

ReadMoreButton.propTypes = {

};

export default ReadMoreButton;

