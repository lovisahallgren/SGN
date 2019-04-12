import styled from 'styled-components'
import React, {Component} from 'react';

const Image = styled.div`
	width: 7%;
  margin-top: 0rem;
`

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const hamburger = '/static/images/sgn_symbol_hamburger.svg'

      return(
        <Image onClick={this.handleClick}>
        	<img src={hamburger} alt="" />
        </Image>
      )
    }
  }

export default Hamburger;
