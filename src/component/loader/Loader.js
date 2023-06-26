import React, {useRef, useEffect} from 'react';
import './Loader.css';

//selecting element
//adding event handler to button
//selecting loading div
//showing loading
//hiding loading
const Loader = ({ isResponse, isSubmit }) => {
	//selecting element
	const inputRef = useRef();

	const displayLoading = () => {
      //show loader
      inputRef.current.classList.add("display")
    }

    const removeLoading = () => {
      //remove loader
      inputRef.current.classList.remove("display")
    }
  
  	const fetchHandler = () => {
  		if(isSubmit === true && isResponse === false) {
  			displayLoading()
  		} else {
  			removeLoading()
  		}
	  }

	useEffect(() => {
	  fetchHandler()
	});

	return (
		<div class="loader" ref={inputRef}></div>
	);
}

export default Loader;