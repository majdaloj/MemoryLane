import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { View, Image, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({onPress}) => (
   <TouchableOpacity style={{top:-20, justifyContent:'center', alignItems:'center', ...styles.shadow}} onPress={onPress}>
    <View style={{width:65, height: 65, borderRadius: 40, backgroundColor: '#e32f45'}}></View>
   </TouchableOpacity>
)


const BottomBar = () => {
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

    return (
      <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false, tabBarStyle: {
                display: 'flex', position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor:'#ffffff', borderRadius: 15, height: 90,
                ... styles.shadow
            },
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      >

        <Tab.Screen name="Main" onPress={goToMain} options={{
            tabBarIcon: ({focused}) => (<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image source={require('../assets/main_icon.png')} resizeMode='contain' 
            style={{width:25, height: 25, tintColor: focused ? '#674EA7' : '#748c94'}} />
            <Text style={{color: focused ? '#674EA7' : '#748c94', fontSize: 15}}>Main</Text></View>)
        }} />

        <Tab.Screen name="Archive" onPress={goToArchive} options={{
            tabBarIcon: ({focused}) => (<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image source={require('../assets/archive_icon.png')} resizeMode='contain' 
            style={{width:25, height: 25, tintColor: focused ? '#674EA7' : '#748c94'}} />
            <Text style={{color: focused ? '#674EA7' : '#748c94', fontSize: 15}}>Archive</Text></View>)
        }} />

        <Tab.Screen
        name="CreateMessage"
        onPress={goToCreateMessage}
        options={{
            tabBarIcon: ({ focused }) => (
            <Image
                source={require('../assets/createmessage_icon.png')}
                resizeMode="contain"
                style={{ width: 70, height: 70 }}
            />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        />

        <Tab.Screen name="Friends" onPress={goToFriends} options={{
            tabBarIcon: ({focused}) => (<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image source={require('../assets/friends_icon.png')} resizeMode='contain' 
            style={{width:25, height: 25, tintColor: focused ? '#674EA7' : '#748c94'}} />
            <Text style={{color: focused ? '#674EA7' : '#748c94', fontSize: 15}}>Friends</Text></View>)
        }} />
        
        <Tab.Screen name="Settings" onPress={goToSettings} options={{
            tabBarIcon: ({focused}) => (<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image source={require('../assets/settings_icon.png')} resizeMode='contain' 
            style={{width:25, height: 25, tintColor: focused ? '#674EA7' : '#748c94'}} />
            <Text style={{color: focused ? '#674EA7' : '#748c94', fontSize: 15}}>Settings</Text></View>)
        }} />
      
      </Tab.Navigator>
    );
  };

export default BottomBar;

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