import React from 'react'
import { View, Text, Dimensions, StatusBar, Image, TextInput, FlatList,Linking } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get("window")
export default function PlaceList() {
    const data = [
        {
            "id": "1",
            "booked": "yes"
        },
        {
            "id": "2",
            "booked": "yes"
        },
        {
            "id": "3",
            "booked": "no"
        },
        {
            "id": "4",
            "booked": "yes"
        },
        {
            "id": "5",
            "booked": "no"
        },
        {
            "id": "6",
            "booked": "yes"
        },
    ]
    const renderItem = ({ item }) => (
        <View style={{ height: height * 0.16, borderRadius: 8, flexDirection: "row", overflow: 'hidden', backgroundColor: 'white', borderWidth: 1.5, borderColor: "#e6e6e6", marginBottom: height * 0.02 }}>
            <View style={{ flex: 1, backgroundColor: "gray" }}>
                <Image source={require("../assets/image/hill2.jpg")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
            </View>
            <View style={{ flex: 1.8 }}>
                <View style={{ flex: 1, justifyContent: "space-between", padding: width * 0.015 }}>
                    <Text numberOfLines={2} style={{ fontSize: width * 0.034, fontWeight: "bold", color: '#46aeff', }}>Manhattan cozy</Text>
                    <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: width * 0.034, letterSpacing: 0.8, opacity: 0.5, color: "gray" }}>Manhattan,New York</Text>
                    <Text style={{ fontSize: width * 0.028, color: "#BFBFBF" }}>Ski Vacations</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: width * 0.015, justifyContent: 'center', flexDirection: "row", justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{ height: width * 0.08, width: '42%', backgroundColor: item.booked == "yes" ? '#E1FFFB' : '#FFE7E7', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: "bold", fontSize: width * 0.037, color: item.booked == "yes" ? '#40B5AD' : '#F96262' }}>{item.booked == "yes" ? "Booked" : "Vacant"} </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${8918794438}`)}}>
                        <Ionicons name="call-sharp" size={width*0.055} color="dodgerblue" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('whatsapp://send?text=hello&phone=+918918794438')}}>
                        <FontAwesome name="whatsapp" size={width*0.058} color="#228B22" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, paddingHorizontal: width * 0.06, backgroundColor: 'white' }}>

            <View style={{ height: height * 0.11, flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ height: height * 0.05, width: width * 0.38, borderRadius: 8, borderColor: '#e6e6e6', borderWidth: 1.5, justifyContent: 'center', alignItems: "center", flexDirection: "row" }}>
                    <Text style={{ color: "#AAAAAA" }}>All Listings </Text>
                    <Entypo name="chevron-small-down" size={24} color="#BFBFBF" />
                </View>
                <View style={{ height: height * 0.05, width: height * 0.05, borderRadius: 8, borderColor: '#e6e6e6', borderWidth: 1.5, justifyContent: 'center', alignItems: "center" }}>
                    <FontAwesome name="sliders" size={24} color="#D0D0D0" />
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

// '#FFE7E7'
// '#F96262'

// '#E1FFFB'
// '#40B5AD'