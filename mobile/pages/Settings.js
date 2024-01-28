import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, Switch, Button, Alert, ScrollView } from 'react-native';

const CustomTabBarButton = ({ label, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
    <Image source={icon} resizeMode="contain" style={{ width: 35, height: 35, tintColor: '#748c94' }} />
    <Text style={{ color: '#748c94', fontSize: 15 }}>{label}</Text>
  </TouchableOpacity>
);

const Settings = () => {
  const navigation = useNavigation();

  const goToSignup = () => {
  navigation.navigate('Signup');
  }

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

  const [searchableProfile, setSearchableProfile] = useState(true);
  const [blockedWords, setBlockedWords] = useState(['University of Toronto', 'Exams', 'Midterm', 'New Grad 2024']);
  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false);

  const handleToggleSearchableProfile = () => {
    setSearchableProfile(!searchableProfile);
  };

  const handleBlockedWordsChange = (newBlockedWords) => {
    setBlockedWords(newBlockedWords);
  };

  const handleDeleteAccount = () => {
    setDeleteAccountLoading(true);

    setTimeout(() => {
      setDeleteAccountLoading(false);
      Alert.alert('Account Deleted', 'Your account has been successfully deleted.', [
        { text: 'OK',
          onPress: () => { navigation.navigate('Signup');},},
      ]);
    }, 2000);
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

    <ScrollView style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>Searchable Profile</Text>
        <Switch
          value={searchableProfile}
          onValueChange={handleToggleSearchableProfile}
          trackColor={{ false: '#9e9e9e', true: 'purple' }}
          thumbColor={searchableProfile ? 'white' : 'purple'}
        />
      </View>

      <View style={{ marginBottom: 20, justifyContent: 'center'}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Blocked Words/Topics</Text>
        <Text>Blocked Words: {blockedWords.join(', ')}</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Button
          title={deleteAccountLoading ? 'Deleting...' : 'Delete My Account'}
          onPress={handleDeleteAccount}
          disabled={deleteAccountLoading}
        />
      </View>
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

export default Settings;
