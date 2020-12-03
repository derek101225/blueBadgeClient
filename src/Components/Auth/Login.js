import React from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useState } from 'react'
import {useHistory} from 'react-router-dom';
import APIURL from '../../helpers/enviornment';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data) => {
            console.log(data);
            props.updateToken(data.token);
            history.push('/');
        })
    }

    return (
        <div>
            <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
        </div>
    )
}

export default Login