import firebase from '../config/firebase';

type UserProfileBaseType = {
  firstName: string;
  lastName: string;
};

export type UserProfileType = { id: string } & UserProfileBaseType;

const userService = {
  setUserById: async (userId: string, firstName: string, lastName: string): Promise<void> => {
    await firebase.firestore().collection('users').doc(userId).set({
      firstName,
      lastName,
    });
  },
  getUserById: async (userId: string | undefined): Promise<UserProfileType | null> => {
    const user = (await firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .get()) as firebase.firestore.DocumentSnapshot<UserProfileBaseType>;

    let userProfile = null;
    const userData = user.data();

    if (userData) {
      userProfile = { id: user.id, ...userData };
    }

    return userProfile;
  },
};

export const { setUserById, getUserById } = userService;
