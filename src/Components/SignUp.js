import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";




    
  

const SignUp = () => {
    const history = useHistory();
    
    function handleSubmit(event) {
    event.preventDefault(); 
      history.push("/");
      
    }
    
    
    
    
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
       <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>

      
      </Form>
    </div>
  );
};

export default SignUp;
