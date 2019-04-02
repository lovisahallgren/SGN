import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 20%;
`;

const Header = () => {
  return(
    <Layout>
      <StyledHeader />
    </Layout>
  )
}

Header.propTypes = {

};

export default Header;
