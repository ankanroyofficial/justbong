import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
       <NavigationContainer>
           <Stack.Navigator>
               {/* <Stack.Screen name="OnBoardingPage" /> */}
           </Stack.Navigator>
       </NavigationContainer>
    )
}
