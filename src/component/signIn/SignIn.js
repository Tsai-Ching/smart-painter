import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signin.css';
import FormInput from '../Form/FormInput';

const SignIn = ({ onRouteChange, loadUser}) => {
	const [form, setForm] = useState({
	  email: '',
	  password: ''
	});

	const handleFormChange = (event) => {
    	const updatedForm = {...form};
    	updatedForm[event.target.name] = event.target.value;
	    setForm(updatedForm);
	};

	const onSubmitChange = (e) => {
		e.preventDefault();
		fetch('https://smart-painter-api.onrender.com/signin',
			{
				method: 'post',
				body: JSON.stringify({
					email: form.email,
					password: form.password
				}),
				headers: {'Content-Type': 'application/json'},
			}
		)
		.then(response => response.json())
		.then(user => {
			if(user.id) {
				loadUser(user);
				onRouteChange('home');
			}
		})
		.catch(console.log);
	}

  	return (
	  	<div className='login d-flex'>
	  		<div className="card align-self-center">
		  		<div className="card-body">
					<Form>
						<h1>Login</h1>
				      	<FormInput 
					    	label='Email address'
					    	name='email'
						 	type="email" 
						  	placeholder="Enter email" 
						 	onChange={handleFormChange} />

				     	<FormInput 
				     		label='Password'
							type="password"
							name='password'
							placeholder="Password" 
							onChange={handleFormChange} />

				      <Button variant="dark" type="submit" value="signin" onClick={onSubmitChange} >
				        Submit
				      </Button>
				    </Form>
			    </div>
		    </div>
		</div>
  );
}

export default SignIn;