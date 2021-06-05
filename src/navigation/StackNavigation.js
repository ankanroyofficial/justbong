import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingPage from "../screen/OnBoardingPage"
import HomePage from '../screen/HomePage';
import PlaceDetails from '../screen/PlaceDetails';
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen name="OnBoardingPage" component={OnBoardingPage} options={{headerShown:false}} />
               <Stack.Screen name="HomePage" component={TabNavigation} options={{headerShown:false}} />
               <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{headerShown:false}} />
           </Stack.Navigator>
       </NavigationContainer>
    )
}
