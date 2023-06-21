import './FormInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function FormInput(props) {
  const { type, placeholder, onChange, label, name } = props;

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </Form.Group>
  )
}

export default FormInput;
	