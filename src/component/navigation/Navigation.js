import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignIn }) => {
  return (
  	<div>
	  	{isSignIn
	  		? <div>
			    <nav className='nav'>
			    	<p className='button' onClick={() => onRouteChange('signin')} >Sign out</p>
			    </nav>
			</div>
			: <div>
			    <nav className='nav'>
			    	<p className='button' onClick={() => onRouteChange('signin')} >Sign in</p>
			    	<p className='button' onClick={() => onRouteChange('register')} >Register</p>
			    </nav>
			</div>
		}
	</div>
  );
}

export default Navigation;