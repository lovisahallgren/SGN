import React, {Component} from 'react';


class InfoPattern extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const pattern = '/static/images/Vector.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default InfoPattern;
