import React, { Component } from 'react';
import styled from 'styled-components';
import Line from '../Line';
import H2 from '../H2'

const StyledPostItCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
position: relative;
line-height: 40px;
padding: 0 20px;
width: 100%;
height: 16rem;
font-weight: 100;
margin-bottom: 10px;
background: ${props => props.background || 'white'};

:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 3.5625rem 3.5625rem 0;
  border-style: solid;
  border-color: #fff #fff #9B3030 #9B3030;
  display: block;
  width: 0;

}

a{
  text-decoration: underline;
  color: ${props => props.color || 'white'};
  margin-left: 10rem;
}

h3 {
  display: inline-flex;
  color: ${props => props.color || 'white'};
}

div {
  margin-bottom: -.9rem;
}

`;

class PostItCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    const { children } = this.props;

    return (

      <StyledPostItCard style={this.props.style} className={this.state.active ? 'flip': null} onclick={() => this.setState({active: !this.state.active})}>

        <div>
          <h3>About us</h3>
          <h3><a href="#" onClick={this.handleClick}>Vänd</a></h3>
        </div>

        <Line style={{marginTop: "0rem"}}/>

        <H2>Support Group Network är ett samarbete där svenskar och flyktingar tillsammans stöttar och hjälper flyktingar</H2>

        <Line style={{marginTop: "0rem"}} />

      </StyledPostItCard>

    );
  }
}

PostItCard.propTypes = {

};

export default PostItCard;
