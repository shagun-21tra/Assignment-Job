// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//     return (
//         <nav className="navbar">
//             <Link to="/" className="nav-link">Home</Link>
//             <Link to="/cart" className="nav-link">Cart</Link>
//             <Link to="/login" className="nav-link">Login</Link>
//         </nav>
//     );
// }


// export default Navbar;




import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            {user ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
