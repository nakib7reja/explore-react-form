import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handlePass = e => {
        console.log(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Your Email' required /><br />
                <input type="password" name='pass' placeholder='password' onChange={handlePass} defaultValue={password} required /><br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default ControlledField;