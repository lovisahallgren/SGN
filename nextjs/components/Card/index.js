import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  height: 40vh;
  background-color: ${props => props.background || 'white'};
  color: black;
  padding: 16px 16px 20px 16px;
  /* top: 100vh; */
  /* margin: 10px; */
  /* padding: 16px; */
`;

const Card = (props) => {
  return (
    <StyledCard style={props.style}></StyledCard>
  )
}

// class Card extends Component {
//   constructor(props) {
//     // console.log(props);
//     super();
//     this.state = {

//     }
//   }

//   render() {
//     const { children } = this.props;
//     return (
//       // <Layout>
//         <StyledCard style={this.props.style}>
//           {children}
//         </StyledCard>
//       // </Layout>
//     );
//   }
// }

Card.propTypes = {

};

export default Card;
