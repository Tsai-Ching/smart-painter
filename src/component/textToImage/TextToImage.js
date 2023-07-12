import React, {useEffect} from 'react';
import './TextToImage.css'

const TextToImage = ({ imageUrl }) => {
	const str = imageUrl;
  return (
    <div className='image-container'>
    	<div className='image'>
    		<img src={str} alt='' />
    	</div>
    </div>
  );
}

export default TextToImage;