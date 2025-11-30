import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 character')
        }
        else {
            setError("")
        }
    }
    const handlePassOnChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
        if (password.length < 6) {
            setError('password must be 6 character or longer')
        }
        else {
            setError("")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Your Email' required /><br />
                <input type="password" name='pass' placeholder='password' onChange={handlePassOnChange} defaultValue={password} required /><br />
                <input type="submit" value='Submit' />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;