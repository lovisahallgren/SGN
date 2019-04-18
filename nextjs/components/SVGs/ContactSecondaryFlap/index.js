import React, {Component} from 'react';


class ContactSecondaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/secondary-flik-kontakt.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default ContactSecondaryFlap;
