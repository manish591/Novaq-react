import { app, db } from 'firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

const useAuthService = () => {
  const auth = getAuth(app);
  const { setToken, setUserID, setCurrentUser } = useAuthContext();
  const userColRef = collection(db, 'users');
  const navigate = useNavigate();

  const signup = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        const { uid, accessToken } = res.user;
        setToken(accessToken);
        setUserID(uid);
        setCurrentUser(email);
        localStorage.setItem('token', JSON.stringify(accessToken));
        localStorage.setItem('userID', JSON.stringify(uid));
        localStorage.setItem('user', JSON.stringify(email));
        await addDoc(userColRef, {
          name: 'Manish',
          email,
          password,
          createdAt: '',
          updatedAt: '',
          score: 0,
          userID: uid
        });
        navigate('/home');
      }
    } catch (err) {
      toast.error(`ERROR: ${err.message}`);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { uid, accessToken } = res.user;
      setToken(accessToken);
      setUserID(uid);
      setCurrentUser(email);
      localStorage.setItem('token', JSON.stringify(accessToken));
      localStorage.setItem('userID', JSON.stringify(uid));
      localStorage.setItem('user', JSON.stringify(email));
      navigate('/home');
    } catch (err) {
      toast.error(`ERROR: ${err.message}`);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setToken('');
      setUserID('');
      setCurrentUser('');
      localStorage.setItem('token', JSON.stringify(''));
      localStorage.setItem('user', JSON.stringify(''));
      localStorage.setItem('userID', JSON.stringify(''));
      navigate('/');
    } catch (err) {
      toast.error(`ERROR: ${err.message}`);
    }
  };

  return {
    signup,
    logout,
    login
  };
};

export { useAuthService };
