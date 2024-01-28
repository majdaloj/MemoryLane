import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { View, Image, Text} from "react-native";

import Archive from "./Archive";
import CreateMessage from "./CreateMessage";
import Friends from "./Friends";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
   <TouchableOpacity style={{top:-20, justifyContent:'center', alignItems:'center', ...styles.shadow}} onPress={onPress}>
    <View style={{width:65, height: 65, borderRadius: 40, backgroundColor: '#e32f45'}}>{children}</View>
   </TouchableOpacity>
)

const BottomBar = () => {
    return (
      <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false, tabBarStyle: {
                display: 'flex', position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor:'#ffffff', borderRadius: 15, height: 90,
                ... styles.shadow
            }
        }}
      >
        <Tab.Screen name="Archive" component={Archive} options={{
            tabBarIcon: ({focused}) => (<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image source={require('../assets/archive_icon.png')} resizeMode='contain' 
            style={{width:25, height: 25, tintColor: focused ? '#674EA7' : '#748c94'}} />
            <Text style={{color: focused ? '#674EA7' : '#748c94', fontSize: 15}}>Archive</Text></View>)
        }} />

        <Tab.Screen
        name="CreateMessage"
        component={CreateMessage}
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

        <Tab.Screen name="Friends" component={Friends} options={{
            tabBarIcon: ({focused}) => (<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image source={require('../assets/friends_icon.png')} resizeMode='contain' 
            style={{width:25, height: 25, tintColor: focused ? '#674EA7' : '#748c94'}} />
            <Text style={{color: focused ? '#674EA7' : '#748c94', fontSize: 15}}>Friends</Text></View>)
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