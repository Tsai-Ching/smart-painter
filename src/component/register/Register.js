import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';

const Register = ({ onRouteChange,loadUser }) => {
	const [signInEmail, setSignInEmail] = useState(false);
	const [signInPassword, setSignInPassword] = useState(false);

	const onEmailChange = (e) => {
		setSignInEmail(e.target.value);
	}
	const onPasswordChange = (e) => {
		setSignInPassword(e.target.value);
	}
	const onSubmitChange = (e) => {
		e.preventDefault();
		fetch('http://localhost:3000/signin',
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: signInEmail,
					password: signInPassword
				})
			}
		)
		.then(response => response.json())
		.then(user => {
			if(user) {
				loadUser(user);
				onRouteChange('home');
			}
		})
	}
  	return (
	  	<div className='login d-flex'>
	  		<div className="card align-self-center">
		  		<div className="card-body">
					<Form>
				      <Form.Group className="mb-3" controlId="formBasicEmail">
				        <Form.Label>Email address</Form.Label>
				        <Form.Control type="email" placeholder="Enter email" />
				        <Form.Text className="text-muted">
				          We'll never share your email with anyone else.
				        </Form.Text>
				      </Form.Group>

				      <Form.Group className="mb-3" controlId="formBasicPassword">
				        <Form.Label>Password</Form.Label>
				        <Form.Control type="password" placeholder="Password" />
				      </Form.Group>
				      <Form.Group className="mb-3" controlId="formBasicCheckbox">
				        <Form.Check type="checkbox" label="Check me out" />
				      </Form.Group>
				      <Button variant="dark" type="submit" value="signin" onClick={() => onRouteChange('home')} >
				        Submit
				      </Button>
				    </Form>
			    </div>
		    </div>
		</div>
  );
}

export default Register;