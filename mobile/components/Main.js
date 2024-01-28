import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Header } from 'react-native';

import TopBar from './TopBar';
import BottomBar from './BottomBar';


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
    <View style={{ flex: 1 }}>
      {randomImageSource && (
        <Image
          source={randomImageSource}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          resizeMode="cover"
        />
      )}
      <NavigationContainer independent={true}>
        <TopBar />
        <BottomBar />
      </NavigationContainer>
    </View>
  );
}

export default Main;
