import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

export const loginOrSignup = (
  isLogin: boolean,
  email: string,
  password: string
) => {
  try {
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password);
    } else {
      createUserWithEmailAndPassword(auth, email, password);
    }
    return true;
  } catch (err: any) {
    throw new Error(err);
  }
};
