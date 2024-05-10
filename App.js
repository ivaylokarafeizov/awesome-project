import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import StylingExercise from './Components/StylingExercise/StylingExercise';
import ListExercise from './Components/ListExercise/ListExercise';
import Palette from './Components/NavigationExercise/Palette/Palette';
import NavigationExercise from './Components/NavigationExercise/NavigationExercise';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="StylingExercise"
        component={StylingExercise}
        options={{ title: 'Styling Exercise' }}
      />
      <MainStack.Screen
        name="ListExercise"
        component={ListExercise}
        options={{ title: 'List Exercise' }}
      />
      <MainStack.Screen
        name="NavigationExercise"
        component={NavigationExercise}
        options={{ title: 'Navigation Exercise' }}
      />
      <MainStack.Screen
        name="Palette"
        component={Palette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator presentation="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddNewPaletteModal"
          component={AddNewPaletteModal}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
