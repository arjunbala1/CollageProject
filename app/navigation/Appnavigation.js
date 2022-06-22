import React, {Profiler} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Locations from '../screens/Locations';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';

import ProfileIcon from 'react-native-vector-icons/Ionicons';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import FavIcon from 'react-native-vector-icons/MaterialIcons';
import SuggestedSpot from '../screens/SuggestedSpot';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeStack = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Suggested' component={SuggestedSpot}/>
        </Stack.Navigator>
    )
}
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      barStyle={{
        backgroundColor: '#000',
      }}>
      <Tab.Screen
        name="profile"
        
        component={Profile}
        options={{
          tabBarIcon: () => (
            <ProfileIcon name="ios-person-outline" size={22} color={'red'} />
          ),
         
          
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          animation: 'slide_from_right',
          tabBarIcon: () => <HomeIcon name="home" size={22} color={'red'} />,
          title:"Home"
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: () =>  <FavIcon name="favorite-outline" size={22} color={'red'} />
        }}
      />
    </Tab.Navigator>
  );
};
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNav" component={BottomTab} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{animation: 'slide_from_left'}}
        />
        <Stack.Screen name="Location" component={Locations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
