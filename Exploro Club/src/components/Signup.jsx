import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;