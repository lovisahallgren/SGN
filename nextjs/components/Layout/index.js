import React, {Component} from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
          {children}
        <Footer />
      </div>
    )
  }
}

export default Layout;
