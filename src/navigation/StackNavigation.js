import React,{useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingPage from "../screen/OnBoardingPage"
import HomePage from '../screen/HomePage';
import PlaceDetails from '../screen/PlaceDetails';
import TabNavigation from './TabNavigation';
import PlaceList from '../screen/PlaceList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import About from '../screen/About';


const Stack = createStackNavigator();

export default function StackNavigation() {

    return (
       <NavigationContainer>
           <Stack.Navigator>
                            <Stack.Screen name="HomePage" component={TabNavigation} options={{headerShown:false}} />
                            <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{headerShown:false}} />
                            <Stack.Screen name="PlaceList" component={PlaceList} options={{headerShown:false}} />
                            <Stack.Screen name="About" component={About} options={{headerShown:false}} />
            </Stack.Navigator>
       </NavigationContainer>
    )
}
