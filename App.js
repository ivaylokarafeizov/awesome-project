import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import StylingExercise from './Components/StylingExercise/StylingExercise';
import ListExercise from './Components/ListExercise/ListExercise';
import Palette from './Components/NavigationExercise/Palette/Palette';
import NavigationExercise from './Components/NavigationExercise/NavigationExercise';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="StylingExercise"
          component={StylingExercise}
          options={{ title: 'Styling Exercise' }}
        />
        <Stack.Screen
          name="ListExercise"
          component={ListExercise}
          options={{ title: 'List Exercise' }}
        />
        <Stack.Screen
          name="NavigationExercise"
          component={NavigationExercise}
          options={{ title: 'Navigation Exercise' }}
        />
        <Stack.Screen
          name="Palette"
          component={Palette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
