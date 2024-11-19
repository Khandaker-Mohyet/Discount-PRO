import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const singInOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    createUser,
    logInUser,
    setUser,
    user,
    singInOut,
    loading
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  },[])
  return (
    
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    
  );
};

export default AuthProvider;