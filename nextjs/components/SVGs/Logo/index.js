import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
	/* width: 7%; */
  margin-top: 0rem;

  img {
    width: 50%;
    height: 100%;
  }
`

const Logo = () => {
  const logo = '/static/images/sgn_logo_bw_small.svg'
  return (
        <Image>
        	<img src={logo} alt="logo" />
        </Image>
  );
};

export default Logo;
