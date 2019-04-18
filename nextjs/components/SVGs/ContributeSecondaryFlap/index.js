import React, {Component} from 'react';


class ContributeSecondaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/secondary-flik-bidra.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default ContributeSecondaryFlap;
