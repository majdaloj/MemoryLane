import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// importing different pages
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import SendMessage from './SendMessage';
import Settings from './Settings';
import Friends from './Friends';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SendMessage" component={SendMessage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Friends" component={Friends} />
      </Stack.Navigator>
    </NavigationContainer>
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
