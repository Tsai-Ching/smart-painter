import React from 'react';
import './logo.css';
import designIcon from './design-icon.png';
import { Tilt } from 'react-tilt';

const Logo = () => {
  return (
    <div className='logo'>
    	<Tilt className='tilt' options={{ max: 55, scale: 1.5 }} style={{ height: 100, width: 100 }}>
    		<div className='tilt-inner'><img src={designIcon} alt='logo'/></div>
    	</Tilt>
    </div>
  );
}

export default Logo;