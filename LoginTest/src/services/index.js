import auth from '@react-native-firebase/auth';

const logIn = async (email, password) => {
  let status = false;
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Log in!');
      status = true;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        status = false;
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        status = false;
      }

      console.error(error);
      status = false;
    });

  return status;
};

const signIn = async (email, password) => {
  let status = false;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed in!');
      status = true;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        status = false;
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        status = false;
      }

      console.error(error);
      status = false;
    });

  return status;
};

const logOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export {signIn, logIn, logOut};
