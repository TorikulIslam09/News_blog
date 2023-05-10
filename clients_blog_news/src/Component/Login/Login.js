import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { authContext } from '../Global_hooks/Global_hook';
import { Navigate } from 'react-router-dom';



const Login = () => {
    const {LogNow} = useContext(authContext)
    const LoginNow = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        LogNow(email, password)
        .then((result) => {
            const user = result.user;
            <Navigate to='/'></Navigate>
            form.reset();
            
          })
          .catch((error) => {
            console.log('erroro khayci', error)
            
          });
    }
    return (
        <div>
        <div className="container position-relative vh-100">
            <div className="form position-absolute top-50 start-50 translate-middle w-50 mx-auto shadow-lg p-5">
              <h1 className='text-dark'>Login Now</h1>
            <Form onSubmit={LoginNow}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
            </div>
        </div>
        </div>
    );
};

export default Login;
