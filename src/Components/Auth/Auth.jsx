import React, {useState}  from 'react';
import {Container, Row, Col} from 'reactstrap'
import Signup from './Signup'
import Login from './Login'


const Auth = (props) => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted')

        const url = login ? 'http://localhost:3000/user/login' : 'http://localhost:3000/user/register';

        const bodyObj = login ? {
            username: username,
            password: password
        } : {
            username: username,
            email: email,
            password: password
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(bodyObj)
        })
        .then(res => res.json())
        .then(data => login ? props.updateToken(data.token) : undefined)
        }
        const title = () => {
            return login ? 'Login' : 'Sign Up';
        }

        const loginToggle = (event) => {
            event.preventDefault();
            setLogin(!login);

            setUsername("")
            setEmail("")
            setPassword("")
        }

     const signupFields = () => {
         return !login ? (
             <div>
             <label htmlFor="email">Email</label>
             <br />
             <input 
             type="text"
             id="email"
             placeholder="email@email"
             value={email}
             onChange={(event) => setEmail(event.target.value)}
             />
             </div>          
         ) : null
     } 
    
    
    
    
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="6">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}



export default Auth;


