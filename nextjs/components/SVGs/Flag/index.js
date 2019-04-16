import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.div`
  width: 7%;
  margin-top: 0rem;
`;

class Flag extends Component {
  constructor(props) {
    super(props);

    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleLanguage() {
    this.props.openLanguage();
  }

  render() {
    return (
      <Image {...this.props} onClick={this.handleLanguage}>
        <img src={this.props.src} alt="" />
      </Image>
    );
  }
}

export default Flag;
