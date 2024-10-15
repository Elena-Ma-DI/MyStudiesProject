import React, { useState, useEffect } from 'react';
import { auth } from  '../config/firebase';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };