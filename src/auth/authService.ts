import firebase from '../config/firebase';
import { setUserById } from './userService';

type EmailPassword = {
  email: string;
  password: string;
};

type SignUp = {
  firstName: string;
  lastName: string;
} & EmailPassword;

const authService = {
  signIn: async ({ email, password }: EmailPassword) => {
    const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
    return auth.user;
  },
  signOut: async (): Promise<void> => {
    await firebase.auth().signOut();
  },
  signUp: async ({ email, password, firstName, lastName }: SignUp) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

    if (result.user?.uid) {
      await setUserById(result.user.uid, firstName, lastName);
    } else {
      throw Error('There was an issue with the login, please try again.');
    }
  },
};

export const { signIn, signOut, signUp } = authService;
