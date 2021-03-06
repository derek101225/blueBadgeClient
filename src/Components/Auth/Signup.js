import React from 'react'
import {Form , FormGroup, Label, Input, Button} from 'reactstrap'
import { useState } from 'react'
import {useHistory} from 'react-router-dom';
import APIURL from '../../helpers/enviornment';

const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({username: username, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data) => {
            props.updateToken(data.token);
            history.push('/');
        })
    }

    return (
        <div>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
            </FormGroup>
            <Button type="submit">Sign Up</Button>
        </Form>
        </div>
    )
}

export default Signup