import firebase from '../config/firebase';

const authService = {
  signIn: async (email, password) => {
    const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
    return auth.user;
  },
  signOut: async () => {
    await firebase.auth().signOut();
  },
};

export const { signIn, signOut } = authService;
