import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CustomTabBarButton = ({ label, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
    <Image source={icon} resizeMode="contain" style={{ width: 35, height: 35, tintColor: '#748c94' }} />
    <Text style={{ color: '#748c94', fontSize: 15 }}>{label}</Text>
  </TouchableOpacity>
);

const Friends = () => {
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

  const [friends, setFriends] = useState([
    { id: '1', name: 'Friend 1' },
    { id: '2', name: 'Friend 2' },
    { id: '3', name: 'Friend 3' },
    // Add more friends as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleFriendAction = (friendId) => {
    // Implement the logic for the friend action based on the friend's ID
    if (friendId === '1') {
      // Friend Back logic
      console.log(`Friend Back action for friend with ID: ${friendId}`);
    } else {
      // Unfriend logic
      console.log(`Unfriend action for friend with ID: ${friendId}`);
      const updatedFriends = friends.filter((friend) => friend.id !== friendId);
      setFriends(updatedFriends);
    }
  };

  const handleSearch = () => {
    // Implement the logic to perform a search based on the searchTerm
    console.log(`Search action with term: ${searchTerm}`);
    // You can make an API request or perform any other search-related action here
    // For now, let's clear the search term and dismiss the keyboard
    setSearchTerm('');
    Keyboard.dismiss();
  };

  const renderFriend = ({ item }) => (
    <View style={styles.friendContainer}>
      <Text style={styles.friendName}>{item.name}</Text>
      <TouchableOpacity onPress={() => handleFriendAction(item.id)}>
        <View
          style={
            item.id === '1' ? styles.friendBackButton : styles.unfriendButton
          }
        >
          <Text
            style={
              item.id === '1'
                ? styles.friendBackButtonText
                : styles.unfriendButtonText
            }
          >
            {item.id === '1' ? 'Friend Back' : 'Unfriend'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {randomImageSource && (
        <Image
          source={randomImageSource}
          style={{ width: '125%', height: '100%', position: 'absolute' }}
          resizeMode="cover"
        />
      )}
      <Text style={styles.title}>Friends Page</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search for friends...'
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend.id}
        renderItem={renderFriend}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: 'white', position: 'absolute', bottom: 0, width: '110%', backgroundColor: 'white', height: 100 }}>
      <CustomTabBarButton icon={require('../assets/main_icon.png')} onPress={goToMain} />
      <CustomTabBarButton icon={require('../assets/archive_icon.png')} onPress={goToArchive} />
      <CustomTabBarButton icon={require('../assets/createmessage_icon.png')} onPress={goToCreateMessage} />
      <CustomTabBarButton icon={require('../assets/friends_icon.png')} onPress={goToFriends} />
      <CustomTabBarButton icon={require('../assets/settings_icon.png')} onPress={goToSettings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32, // Add padding at the top
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  friendContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  friendName: {
    fontSize: 18,
  },
  friendBackButton: {
    backgroundColor: '#FFC0CB',
    padding: 8,
    borderRadius: 5,
  },
  friendBackButtonText: {
    color: '#000000',
  },
  unfriendButton: {
    backgroundColor: '#A020F0',
    padding: 8,
    borderRadius: 5,
  },
  unfriendButtonText: {
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#4FB9AF', // Change the color to your preference
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4285f4', // Change the color to your preference
    padding: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
  addButtonLabel: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Friends;
