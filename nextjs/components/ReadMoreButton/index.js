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
  top: -1rem;
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
`;

class ReadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null,
      isExpanded: false
    };

    this.expandReadMore = this.expandReadMore.bind(this);
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
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
    const isHighContrastMode = this.state.isHighContrastMode === 'true';

    return (
      <div>
        {this.state.isExpanded && children}
        <StyledReadMoreButton
          onClick={this.expandReadMore}
          style={this.props.style}
        >
          {this.state.isExpanded ? 'Läs mindre' : 'Läs mer'}
          {this.state.isExpanded ? <ArrowUp /> : <ArrowDown />}
        </StyledReadMoreButton>
      </div>
    );
  }
}

ReadMoreButton.propTypes = {};

export default ReadMoreButton;
