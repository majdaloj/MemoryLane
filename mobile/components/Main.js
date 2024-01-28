import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Header } from 'react-native';

const CustomTabBarButton = ({ label, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
    <Image source={icon} resizeMode="contain" style={{ width: 35, height: 35, tintColor: '#748c94' }} />
    <Text style={{ color: '#748c94', fontSize: 15 }}>{label}</Text>
  </TouchableOpacity>
);

const Main = () => {
  const navigation = useNavigation();

  const goToMain = () => {
  navigation.navigate('Main');
  };

  const goToArchive = () => {
  navigation.navigate('Archive');
  };

  const goToCreateMessage = () => {
  navigation.navigate('CreateMessage');
  };

  const goToFriends = () => {
  navigation.navigate('Friends');
  };

  const goToSettings = () => {
  navigation.navigate('Settings');
  };

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
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', height: 100 }}>
      <CustomTabBarButton icon={require('../assets/main_icon.png')} onPress={goToMain} />
      <CustomTabBarButton icon={require('../assets/archive_icon.png')} onPress={goToArchive} />
      <CustomTabBarButton icon={require('../assets/createmessage_icon.png')} onPress={goToCreateMessage} />
      <CustomTabBarButton icon={require('../assets/friends_icon.png')} onPress={goToFriends} />
      <CustomTabBarButton icon={require('../assets/settings_icon.png')} onPress={goToSettings} />
    </View>
    </View>
  );
}

export default Main;
