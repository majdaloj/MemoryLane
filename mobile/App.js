import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

// importing different pages
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Main from './components/Main.js';
import CreateMessage from './components/CreateMessage.js';
import Settings from './components/Settings.js';
import Friends from './components/Friends.js';
import Archive from './components/Archive.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CreateMessage" component={CreateMessage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Archive" component={Archive} />
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
