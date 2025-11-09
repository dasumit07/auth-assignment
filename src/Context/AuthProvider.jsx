import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

const [user, setUser]= useState(null);
const [loading, setLoading] = useState(true);

const authInfo = {
    user,
    setUser,
    loading,
    setLoading
};

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
});
    return () => {
    unsubscribe();
    }
}, []);

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;