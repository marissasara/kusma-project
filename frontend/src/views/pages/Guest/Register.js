import { useState } from 'react';
import { Col, Button, Form } from 'react-bootstrap';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example validation (simple, can be improved)
    const emailError = email === ''; // Checks if email is empty
    const passwordError = password === ''; // Checks if password is empty

    setErrors({
      email: emailError ? 'Please enter a valid email' : false,
      password: passwordError ? 'Please enter a password' : false,
    });
    
    // If no errors, proceed with form submission or further logic
    if (!emailError && !passwordError) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <Col className='col-6 border border-1 p-4 rounded'>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email} // Apply is-invalid if there's an error
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password} // Apply is-invalid if there's an error
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default Register;
