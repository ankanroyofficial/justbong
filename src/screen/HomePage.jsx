import React from 'react'
import { View, Text, Button, StatusBar, Image, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { height, width } from '../constants/Constant'
import TypeOfBooking from '../component/TypeOfBooking';
import DestinationScroll from '../component/DestinationScroll';


export default function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 1,position:'relative'}}>
                <View style={{ height:height*0.62 }}></View>
                <View style={{ height: height * 0.3}}>
                    <Image source={require("../assets/image/test.png")} style={{ height: "100%", width: "100%", resizeMode:"contain"}} />
                </View>
                <View style={{ height: height * 0.08 }}></View>
            </View>
            <ScrollView  >
                <View style={{ flex:1,}}>
                    <View style={{ height: height * 0.04, justifyContent: "center", alignItems: "flex-end", marginHorizontal: width * 0.055 }}>
                        <Entypo name="dots-three-vertical" size={width * 0.05} color="black" />
                    </View>
                    <View style={{ height: height * 0.24, backgroundColor: 'white', marginHorizontal: width * 0.055 }}>
                        <Image source={require("../assets/image/a.jpg")} style={{ height: "100%", width: '100%', resizeMode: "cover" }} />
                    </View>

                    <TypeOfBooking />
                    <DestinationScroll navigation={navigation} />
                    <View style={{ height: height * 0.3 }}>
                        <Text style={{ fontSize: width * 0.1, paddingTop: height * 0.02, fontWeight: 'bold', color: '#0189d1', textAlign: 'center' }}>Let's Go Travel</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


{/* <Button onPress={()=>{navigation.navigate("PlaceDetails")}} title="Next" /> */ }

