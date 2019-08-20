import React, { useState } from 'react';
import axios from 'axios';

function LoginForm(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/')
                console.log(credentials)
            })
            .catch(err => {
                console.log('Error while logging in', err.response)
            })

    };

    return (
        <>
            <h3>Log In</h3>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button>
                    Log In
                </button>
            </form>
        </>
    );

};

export default LoginForm;