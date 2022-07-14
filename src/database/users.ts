import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const auth = getAuth();

export const loginOrSignup = async (
  isLogin: boolean,
  email: string,
  password: string
) => {
  try {
    if (isLogin) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } else {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    }
  } catch (err: any) {
    return { error: err.message };
  }
};
