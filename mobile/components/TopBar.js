// TopBar.js
import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const Logo = () => (
    <Image
      source={require('../assets/memorylane_logo.png')}
      style={{ width: 160, height: 40 }}
    />
  );
  
  const SettingsIcon = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Image
        source={require('../assets/settings_icon.png')}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
    </TouchableOpacity>
  );

  const TopBar = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false, tabBarStyle: {
                display: 'flex', position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor:'#ffffff', borderRadius: 15, height: 90,
                ... styles.shadow
            }
        }}
      >
      </Tab.Navigator>
    );
  };

export default TopBar;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
