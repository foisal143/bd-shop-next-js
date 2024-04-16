'use client';
import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '@/firebase/firebase';

export const AuthContext = createContext(null);
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvaider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const profileUpdate = (currentUser, name, image) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  // create on auth changed
  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubs();
  }, []);

  const userInfo = {
    user,
    googleLogin,
    createUser,
    loginWithEmail,
    loading,
    logout,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
