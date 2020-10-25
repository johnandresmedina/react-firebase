import firebase from '../config/firebase';

const userService = {
  setUserById: async (userId, firstName, lastName) => {
    await firebase.firestore().collection('users').doc(userId).set({
      firstName,
      lastName,
    });
  },
  getUserById: async userId => {
    const user = await firebase.firestore().collection('users').doc(userId).get();
    return { id: user.id, ...user.data() };
  },
};

export const { setUserById, getUserById } = userService;
