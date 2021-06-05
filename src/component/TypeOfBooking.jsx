import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { height, width } from '../constants/Constant';
export default function TypeOfBooking() {
    return (
        <View style={{ height: height * 0.2, marginTop: height * 0.02, justifyContent: 'center', alignItems: 'center', marginHorizontal: width * 0.055 ,backgroundColor:'white'  }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#6f99fb', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <Ionicons name="airplane" size={width * 0.06} color="white" />
                </View>
                <Text>Flight</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#fcdc3b', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <MaterialIcons name="train" size={width * 0.07} color="white" />
                </View>
                <Text>Train</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#db82fb', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <FontAwesome5 name="bus-alt" size={width * 0.052} color="white" />
                </View>
                <Text>Bus</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#f56abe', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <FontAwesome5 name="taxi" size={width * 0.05} color="white" />
                </View>
                <Text>Taxi</Text>
            </View>

        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#fd9c61', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <Ionicons name="bed" size={width * 0.06} color="white" />
                </View>
                <Text>Hotel</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#44b6fa', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <FontAwesome name="cutlery" size={width * 0.052} color="white" />
                </View>
                <Text>Eats</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#44c9b1', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <Ionicons name="compass" size={width * 0.07} color="white" />
                </View>
                <Text>Advanture</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#fa796a', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <MaterialCommunityIcons name="party-popper" size={width * 0.07} color="white" />
                </View>
                <Text>Event</Text>
            </View>
        </View>
    </View>
    )
}
