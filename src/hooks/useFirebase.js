import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  // google sign in method
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoggedIn(true);
      })
      .finally(() => setIsLoading(false));
  };

  // state handle observer
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
    return () => unsub; //eslint-disable-next-line
  }, []);

  // sign out method
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  };

  return { user, signInUsingGoogle, logOut, isLoading, isLoggedIn };
};

export default useFirebase;
