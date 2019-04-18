import React, {Component} from 'react';


class SocialSecondaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/secondary-flik-socialt.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default SocialSecondaryFlap;
