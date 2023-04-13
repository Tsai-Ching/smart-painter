import React from 'react';
import './InputForm.css';

const InputForm = ({ onInputChange, handleClick }) => {
  return (
    <div className='input-title'>
    	<div className='title'>	
    		<h1>Create a Van Gogh style artwork!</h1>
    		<p>Write down a discription below:</p>
    	</div>

    	<div className='input-form'>
    		<textarea className='text-area' onChange={onInputChange} />
    		<div className='button-wrapper'>
    			<button className='input-button' onClick={ handleClick } >CREATE!</button>
    		</div>
    	</div>

    </div>
  );
}

export default InputForm;