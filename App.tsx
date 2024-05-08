import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorBox from './Components/ColorBox';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Here are some boxes of different colors
      </Text>
      <ColorBox colorName="Cyan" colorHex="#2aa198" />
      <ColorBox colorName="Blue" colorHex="#268bd2" />
      <ColorBox colorName="Magenta" colorHex="#d33682" />
      <ColorBox colorName="Orange" colorHex="#cb4b16" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
