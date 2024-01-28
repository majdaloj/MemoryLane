import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

// importing different pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import CreateMessage from "./pages/CreateMessage";
import Settings from "./pages/Settings";
import Friends from "./pages/Friends";
import Archive from "./pages/Archive";

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
