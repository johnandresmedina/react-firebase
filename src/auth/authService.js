import firebase from '../config/firebase';
import { setUserById } from './userService';

const authService = {
  signIn: async ({ email, password }) => {
    const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
    return auth.user;
  },
  signOut: async () => {
    await firebase.auth().signOut();
  },
  signUp: async (email, password, firstName, lastName) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

    await setUserById(result?.user?.uid, firstName, lastName);
  },
};

export const { signIn, signOut, signUp } = authService;
