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
`;

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
          {this.state.isExpanded && children}
        <StyledReadMoreButton onClick={this.expandReadMore} style={isHighContrastMode ? {background: "var(--secondary-purple)"} : {background: "var(--primary-purple)"}}>
          {this.state.isExpanded ? "Läs mindre" : "Läs mer"}
        </StyledReadMoreButton>
      </div>
    );
  }
}

ReadMoreButton.propTypes = {

};

export default ReadMoreButton;

