import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from '../screens/Home';
import Locations from '../screens/Locations';

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup}  options={{animation:"slide_from_left"}}/>
                <Stack.Screen name='Home' component={Home}  options={{animation:"slide_from_right"}}/>
                <Stack.Screen name="Location" component={Locations} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;