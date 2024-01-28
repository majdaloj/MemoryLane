import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView, Video, Audio } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

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

  const mediaData = [
    {
      type: 'image',
      source: require('../assets/memories/image1.jpg'),
      name: 'John Doe',
      date: '2024-02-01',
    },
    {
      type: 'image',
      source: require('../assets/memories/image2.jpg'),
      name: 'Jane Smith',
      date: '2024-02-03',
    },
    {
      type: 'image',
      source: require('../assets/memories/image1.jpg'),
      name: 'John Doe',
      date: '2024-02-01',
    },
    {
      type: 'image',
      source: require('../assets/memories/image1.jpg'),
      name: 'John Doe',
      date: '2024-02-01',
    },
    {
      type: 'image',
      source: require('../assets/memories/image1.jpg'),
      name: 'John Doe',
      date: '2024-02-01',
    },
    {
      type: 'image',
      source: require('../assets/memories/image1.jpg'),
      name: 'John Doe',
      date: '2024-02-01',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {randomImageSource && (
        <Image
          source={randomImageSource}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          resizeMode="cover"
        />
      )}

    <ScrollView>
      {mediaData.map((item, index) => (
        <MediaItem key={index} {...item} />
      ))}
    </ScrollView>

    
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

const MediaItem = ({ type, source, name, date, onSwipe }) => {
  const renderMediaContent = (mediaType, mediaSource) => {
    if (mediaType === 'image') {
      return <Image source={mediaSource} style={{ width: '95%', height: '95%', borderRadius: 15}} />;
    }
    // Add cases for other media types (videos, text, audio, etc.)

    return null;
  };

  const renderPolaroid = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 15,
          overflow: 'hidden',
          height: 250,
          width: 320,
          elevation: 5,
          margin: 15,
          marginLeft: 25,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
          <Text>{date}</Text>
        </View>

        {renderMediaContent(type, source)}
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity onPress={onSwipe} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', padding: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Archive</Text>
        </TouchableOpacity>
      )}
    >
      {renderPolaroid()}
    </Swipeable>
  );
};
