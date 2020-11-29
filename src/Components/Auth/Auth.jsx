import { useState } from 'react';


const Auth = (props) => {
    console.log(props);
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = login ? 'https://localhost:3000/user/login' : 'https://localhost:3000/user/register';

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
             <label htmlFor="username">Username</label>
             <br />
             <input 
             type="text"
             id="username"
             value={username}
             onChange={(event) => setUsername(event.target.value)}
             />
             </div>          
         ) : null
     } 

     return (
         <div>
            <form onSubmit= {handleSubmit}>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor ="username">Username</label>
                <br />
                <input 
                id="username"
                value={username}
                placeholder="username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }} />
            <br />

            <label htmlFor="password">Password:</label>
            <br />
            <input 
            id="password"
            value={password}
            placeholder="password"
            onChange={(event) => {
                setPassword(event.target.value)
            }} />
            <br />
            <button onClick={loginToggle}>Register</button>
            <br />
            <button type ="submit">Login</button>

            </form>
         </div>
     )
    }





export default Auth;