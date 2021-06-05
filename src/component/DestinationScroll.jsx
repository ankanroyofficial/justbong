import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { height, width } from '../constants/Constant'

export default function DestinationScroll() {
    const data = [
        { "id": "1" },
        { "id": "2" },
        { "id": "3" },
        { "id": "4" },
        { "id": "5" }
    ]
    return (
        <View style={{ height: height * 0.38,  marginTop: height * 0.02,backgroundColor:'white' }}>
            <View style={{ height: height * 0.05, justifyContent: "space-between", marginHorizontal: width * 0.055, flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontSize: width * 0.048, fontWeight: 'bold' }}>Destination</Text>
                <Text style={{ fontSize: width * 0.039, fontWeight: 'bold' }}>Show All</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => (
                        <View key={index} style={{ height: "100%", width: width * 0.35, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: width * 0.03, marginRight: (index % (data.length) - (data.length - 1) == 0) ? width * 0.03 : 0 }}>
                            <View style={{ height: height * 0.25, backgroundColor: 'gray', width: width * 0.35, borderRadius: 10 }}>
                            </View>
                            <Text style={{ fontSize: width * 0.035, fontWeight: 'bold' }}>Ski Villa</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
