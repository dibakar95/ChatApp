import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Title, Button} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
  googleButtonLabel: {
    fontSize: 18,
  },
});
const LoginScreen = ({navigation}) => {
  const {login, signInGoogle, onFacebookButtonPress} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Title style={styles.titleText}>Welcome to Chat app</Title>
          <FormInput
            labelName="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
          <FormInput
            labelName="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(userPassword) => setPassword(userPassword)}
          />
          <FormButton
            title="Login"
            modeValue="contained"
            labelStyle={styles.loginButtonLabel}
            onPress={() => login(email, password)}
          />
          <FormButton
            title="New user? Join here"
            modeValue="text"
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Button
            icon="google"
            mode="contained"
            onPress={signInGoogle} //{() => console.log('Signed in with Google!')}
            contentStyle={{height: 10, width: 150, margin: 10}}>
            Google
          </Button>
          <Button
            icon="facebook"
            mode="contained"
            contentStyle={{height: 10, width: 150, margin: 10}}
            onPress={() =>
              onFacebookButtonPress().then(() =>
                console.log('Signed in with Facebook!'),
              )
            }>
            Facebook
          </Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginBottom: 50,
          }}>
          <Button
            icon="twitter"
            mode="contained"
            contentStyle={{height: 10, width: 150, margin: 10}}
            onPress={() => console.log('Pressed')}>
            twitter
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
