import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledReadMoreCard = styled.div`
  width: 100%;
  max-height: 50rem;
  min-height: 21rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-item: center; */
  /* height: 40vh; */
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 16px 16px 20px 16px;
  margin: 16px 0;
  /* opacity: 0; */
  /* top: 100vh; */
  /* margin: 10px; */
  /* padding: 16px; */


`;

// const Card = (props) => {
//   const childre =
//   return (
//     <StyledCard style={props.style}>
//       {children}
//     </StyledCard>
//   )
// }

class ReadMoreCard extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    const { children } = this.props;
    return (
      // <Layout>
        <StyledReadMoreCard style={this.props.style}>
          {children}
        </StyledReadMoreCard>
      // </Layout>
    );
  }
}

ReadMoreCard.propTypes = {

};

export default ReadMoreCard;
