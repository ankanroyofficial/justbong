import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { height, width } from '../constants/Constant'

export default function DestinationScroll(props) {
    const data = [
        {
            "id": "1",
            "image": require("../assets/image/k.png"),
            "title": "Ski Villa"
        },
        {
            "id": "2",
            "image": require("../assets/image/trek.jpeg"),
            "title": "Treking"
        },
        {
            "id": "3",
            "image": require("../assets/image/motor.jpg"),
            "title": " Motorcycling Tour"
        },
        {
            "id": "4",
            "image": require("../assets/image/caving.jpg"),
            "title": "Caving"
        },

        {
            "id": "5",
            "image": require("../assets/image/scuba.jpg"),
            "title": "Scuba Diving"
        }
    ]
    return (
        <View style={{ height: height * 0.38, marginTop: height * 0.02, backgroundColor: 'white' }}>
            <View style={{ height: height * 0.05, justifyContent: "space-between", marginHorizontal: width * 0.055, flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontSize: width * 0.048, fontWeight: 'bold' }}>Destination</Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate("PlaceList") }}>
                    <Text style={{ fontSize: width * 0.039, fontWeight: 'bold' }}>Show All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => (
                        <View key={index} style={{ height: "100%", width: width * 0.35, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: width * 0.03, marginRight: (index % (data.length) - (data.length - 1) == 0) ? width * 0.03 : 0 }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { props.navigation.navigate("PlaceDetails") }} style={{ height: height * 0.25, backgroundColor: '#e6e6e6', width: width * 0.35, borderRadius: 10, overflow: "hidden" }}>
                                <Image source={item.image} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: width * 0.035, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
