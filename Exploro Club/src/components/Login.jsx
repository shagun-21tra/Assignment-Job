// // import React from 'react';

// // function Login() {
// //     return (
// //         <div>
// //             <h1>Login</h1>
// //             <p>Login functionality coming soon.</p>
// //         </div>
// //     );
// // }

// // export default Login;



// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthProvider';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [formData, setFormData] = useState({ username: '', password: '' });
//     const { login } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         login({ ...formData, role: 'customer' }); // Assign customer role for now
//         navigate('/dashboard');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//             />
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default Login;






import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
