import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

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

  const handleLogin = () => {
    navigation.navigate('Main');
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
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

      {/* Login form */}
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
        <TextInput
          placeholder="Username"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        />
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#4285f4', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSignup} style={{ marginTop: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
