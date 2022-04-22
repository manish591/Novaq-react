import { app, db } from 'firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthContext } from './useAuthContext';

const useAuthService = () => {
  const auth = getAuth(app);
  const { setToken, setUserID } = useAuthContext();
  const userColRef = collection(db, 'users');

  const signup = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        const { uid, accessToken } = res.user;
        setToken(accessToken);
        setUserID(uid);
        localStorage.setItem('token', accessToken);
        localStorage.setItem('userID', uid);
        await addDoc(userColRef, {
          name: 'Manish',
          email,
          password,
          createdAt: '',
          updatedAt: ''
        });
      }
    } catch (err) {
      console.error('Error while signing in', err);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { uid, accessToken } = res.user;
      setToken(accessToken);
      setUserID(uid);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('userID', uid);
    } catch (err) {
      console.error('Error while loggin in', err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setToken('');
      setUserID('');
      localStorage.setItem('token', '');
      localStorage.setItem('userID', '');
    } catch (err) {
      console.error('Error while logging out', err);
    }
  };

  return {
    signup,
    logout,
    login
  };
};

export { useAuthService };
