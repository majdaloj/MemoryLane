import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, Header } from 'react-native';
import Settings from './Settings.js';

const Logo = () => (
  <Image
    source={require('../assets/memorylane_logo.png')}
    style={{ width: 60, height: 20 }}
  />
);

const SettingsIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Image
      source={require('../assets/settings_icon.png')}
      style={{ width: 30, height: 30, marginRight: 10 }} // Adjust the size and margin as needed
    />
  </TouchableOpacity>
);

const Stack = createStackNavigator();

const Main = () => {
  const imageSources = [
    require('../assets/background1.png'),
    require('../assets/background2.png'),
    require('../assets/background3.png'),
  ];
  const [randomImageSource, setRandomImageSource] = useState(null);
  useEffect(() => {
    chooseRandomImage();
  }, []);

  const chooseRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    setRandomImageSource(imageSources[randomIndex]);
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {randomImageSource && (
        <Image
          source={randomImageSource}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          resizeMode="cover"
        />
      )}

      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}


    </View>
  );
}

export default Main;
