import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen  from './screens/ProfileScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import MyPlanScreen from './screens/MyPlanScreen';
import ExcerciseScreen from './screens/ExcerciseScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import { FitnessContext } from './Context';





const Stack = createStackNavigator();

export default function App() {
  return (
    <FitnessContext>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Excercise" component={ExcerciseScreen} />
        <Stack.Screen name="Fit" component={FitScreen} />
        <Stack.Screen name="Rest" component={RestScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="MyPlan" component={MyPlanScreen}/>

       </Stack.Navigator>
    </NavigationContainer>
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
