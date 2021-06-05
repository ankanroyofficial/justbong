import React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage';
import SearchPage from '../screen/SearchPage';
import Profile from '../screen/Profile';
import FavaritePlace from '../screen/FavaritePlace';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const { height, width } = Dimensions.get("window")
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                bottom: height * 0.025,
                left: width * 0.055,
                right: width * 0.055,
                elevation: 0,
                backgroundColor: "white",
                borderRadius: 15,
                height: height * 0.085,
                ...style.shadow
            }

        }}>
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="globe"size={ focused?width*0.075:width*0.062}  color= { focused?"#0189d1": "gray" }/>
                    </View>
                )
            }} />
            <Tab.Screen name="SearchPage" component={SearchPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="search" size={ focused?width*0.075:width*0.062}  color= { focused?"#0189d1": "gray" } />
                    </View>
                )
            }} />
            <Tab.Screen name="FavaritePlace" component={FavaritePlace} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="bookmark" size={ focused?width*0.075:width*0.062}  color= { focused?"#0189d1": "gray" } />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="account" size={ focused?width*0.078:width*0.062} color= { focused?"#0189d1": "gray" }/>
                    </View>
                )
            }} />
        </Tab.Navigator>

    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 2
    }

})