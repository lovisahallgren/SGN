import React, {Component} from 'react';


class ContactPrimaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/primary-flik-kontakt.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default ContactPrimaryFlap;
