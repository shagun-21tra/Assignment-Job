// // import React, { createContext, useState } from 'react';

// // export const AuthContext = createContext();

// // function AuthProvider({ children }) {
// //     const [user, setUser] = useState(null);

// //     const login = (userData) => setUser(userData);
// //     const logout = () => setUser(null);

// //     return (
// //         <AuthContext.Provider value={{ user, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // }

// // export default AuthProvider;


// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// function AuthProvider({ children }) {
//     const [user, setUser] = useState(null);

//     const login = (userData) => setUser({ ...userData, role: userData.role || 'customer' });
//     const logout = () => setUser(null);

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthProvider;



import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
