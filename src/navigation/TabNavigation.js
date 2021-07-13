import React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage';
import Notification from '../screen/Notification';
import News from '../screen/News';
import Shop from '../screen/Shop';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { scale } from '../constants/Scale';





const { height, width } = Dimensions.get("window")
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
               
                elevation: 0,
                backgroundColor: "#3d3d5c",
               
                height: height * 0.085,
                ...style.shadow
            }

        }}>
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="globe" size={focused ? width * 0.080 : width * 0.062} color={focused ? "#fa796a" : "white"} />
                        <Text style={{fontSize:focused ?scale(40):scale(30),color:focused ?"#fa796a":"white"}}>Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="SearchPage" component={Notification} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                       <Ionicons name="notifications-outline" size={focused ? width * 0.080 : width * 0.062} color={focused ?"#fa796a":"white"} />
                       <Text style={{fontSize:focused ?scale(40):scale(30),color:focused ?"#fa796a":"white"}}>Notification</Text>
                       {/* <View style={{position:'absolute',width:scale(10),height:scale(10),backgroundColor:"red",borderRadius:scale(5),right:0,top:0}}>

                       </View> */}
                        
                    </View>
                )
            }} />
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                       
                        <Entypo name="shop" size={focused ? width * 0.080 : width * 0.062} color={focused ?"#fa796a":"white"} />
                        <Text style={{fontSize:focused ?scale(40):scale(30),color:focused ?"#fa796a":"white"}}>Shop</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="News" component={News} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        
                        <Entypo name="news" size={focused ? width * 0.080 : width * 0.062} color={focused ?"#fa796a":"white"} />
                        <Text style={{fontSize:focused ?scale(40):scale(30),color:focused ?"#fa796a":"white"}}>News</Text>
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