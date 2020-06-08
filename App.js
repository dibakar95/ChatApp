import React from 'react';
import Providers from './src/navigation/index';

/* import {StyleSheet, Dimensions, View} from 'react-native';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 3,
    height: height / 50,
  },
}); */
const App = () => {
  return <Providers />;
  /* return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        icon="camera"
        mode="contained"
        contentStyle={styles.buttonContainer}
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  ); */
};

export default App;
