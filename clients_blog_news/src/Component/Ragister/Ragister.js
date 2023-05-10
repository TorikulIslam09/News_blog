import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { authContext } from '../Global_hooks/Global_hook';


const Ragister = () => {
// const {reagisternow} = useContext(AuthInfo)
const {ReagisterNow} = useContext(authContext)
console.log(ReagisterNow)
    const Ragister_form = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        ReagisterNow(email, password)
        .then((result) => {
            const user = result.user;
     
            form.reset()
          })
          .catch((error) => {
            console.log('erroro khayci', error)
            
          });
    }
    return (

        <div className="container position-relative vh-100">
            <div className="form position-absolute top-50 start-50 translate-middle w-50 mx-auto shadow-lg p-5">
            <h1 className='text-dark'>Ragister Now</h1>
            <Form onSubmit={Ragister_form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ragister
      </Button>
    </Form>
            </div>
        </div>
    );
};

export default Ragister;