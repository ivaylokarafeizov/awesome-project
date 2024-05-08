import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('StylingExercise')}>
        <Text>Styling Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListExercise')}>
        <Text>List Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
