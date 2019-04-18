import React, {Component} from 'react';


class InfoSecondaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/secondary-flik-info.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default InfoSecondaryFlap;
