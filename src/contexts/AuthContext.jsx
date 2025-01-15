// src/contexts/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, async (user) => {
              if(user){
                 setUser(user);
                 const token = await user.getIdToken();
                 setAuthToken(token);
              } else{
                setUser(null);
                setAuthToken(null);
              }
           setLoading(false);
          });
         return () => unsubscribe();
    }, []);
    const value = { user, loading, authToken };
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;