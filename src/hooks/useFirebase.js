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
  const auth = getAuth();

  // google sign in method
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  // state handle observer
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsub; //eslint-disable-next-line
  }, []);

  // sign out method
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
