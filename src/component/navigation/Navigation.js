import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignIn }) => {
  return (
  	<div>
	  	{isSignIn
	  		? <div>
			    <nav className='nav'>
			    	<p onClick={() => onRouteChange('signin')} >Sign out</p>
			    </nav>
			</div>
			: <div>
			    <nav className='nav'>
			    	<p onClick={() => onRouteChange('signin')} >Signin</p>
			    </nav>
			    <nav className='nav'>
			    	<p onClick={() => onRouteChange('register')} >Register</p>
			    </nav>
			</div>
		}
	</div>
  );
}

export default Navigation;