import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import StylingExercise from './Components/StylingExercise/StylingExercise';
import ListExercise from './Components/ListExercise/ListExercise';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StylingExercise" component={StylingExercise} />
        <Stack.Screen name="ListExercise" component={ListExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
