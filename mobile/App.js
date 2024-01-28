import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomTabBarButton = ({ label, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
    <Image source={icon} resizeMode="contain" style={{ width: 25, height: 25, tintColor: '#748c94' }} />
    <Text style={{ color: '#748c94', fontSize: 15 }}>{label}</Text>
  </TouchableOpacity>
);

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
    <NavigationContainer independent={true}>
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

