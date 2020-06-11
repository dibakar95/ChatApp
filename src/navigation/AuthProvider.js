import React, {createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    configureGoogleSign();
  }, []);

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId:
        '982398107838-3d3k3fn6qd5003r7toet07p2jlrrp930.apps.googleusercontent.com',
    });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        signInGoogle: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();
            console.log(idToken);
            // // Create a Google credential with the token

            // const googleCredential = auth.GoogleAuthProvider.credential(
            //   idToken,
            // );

            // // Sign-in the user with the credential
            // return auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log(error);
          }
        },
        onFacebookButtonPress: async () => {
          // Attempt login with permissions
          const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
          ]);

          if (result.isCancelled) {
            throw 'User cancelled the login process';
          }

          // Once signed in, get the users AccesToken
          const data = await AccessToken.getCurrentAccessToken();

          if (!data) {
            throw 'Something went wrong obtaining access token';
          }

          // Create a Firebase credential with the AccessToken
          const facebookCredential = auth.FacebookAuthProvider.credential(
            data.accessToken,
          );

          // Sign-in the user with the credential
          return auth().signInWithCredential(facebookCredential);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
