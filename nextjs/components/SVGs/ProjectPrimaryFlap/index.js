import React, {Component} from 'react';


class ProjectPrimaryFlap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.openMenu();
  }

  render() {
      const flap = '/static/images/primary-flik-projekt.svg'

      return(
        	<img src={flap} alt="" />
      )
    }
  }

export default ProjectPrimaryFlap;
