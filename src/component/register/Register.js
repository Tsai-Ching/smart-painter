import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormInput from '../Form/FormInput';
import './Register.css';

const Register = ({ onRouteChange,loadUser }) => {
	const [form, setForm] = useState({
	  name: '',
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
		fetch('https://smart-painter-api.onrender.com/register',
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					password: form.password
				})
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
						<h1>Register</h1>
					    <FormInput 
					    	label='Name'
					    	name='name'
						  	type="text" 
						  	placeholder="Enter your name" 
						  	onChange={handleFormChange} />

					    <FormInput 
					    	label='Email address'
					    	name='email'
							type="email" 
							placeholder="Enter email" 
							onChange={handleFormChange} />

				     	<FormInput 
				     		label='Password'
							type="password"
							placeholder="Password" 
							name='password'
							onChange={handleFormChange} />


				      <Button variant="dark" type="submit" value="register" onClick={onSubmitChange} >
				        Submit
				      </Button>
				    </Form>
			    </div>
		    </div>
		</div>
  );
}

export default Register;