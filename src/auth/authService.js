import firebase from '../config/firebase';

const authService = {
  signIn: async (email, password) => {
    const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
    return auth.user;
  },
  signOut: async () => {
    await firebase.auth().signOut();
  },
  signUp: async (email, password, firstName, lastName) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

    await firebase.firestore().collection('users').doc(result?.user?.uid).set({
      firstName,
      lastName,
    });
  },
};

export const { signIn, signOut, signUp } = authService;
