import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('StylingExercise')}>
        <Text style={styles.title}>1. Styling Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListExercise')}>
        <Text style={styles.title}>2. List Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NavigationExercise')}
      >
        <Text style={styles.title}>3. Navigation Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
