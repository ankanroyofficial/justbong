import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { height, width } from '../constants/Constant'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PlaceDetails({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, }}>
                <View style={{ height: height * 0.4 }}>
                    <Image source={require("../assets/image/k.png")} style={{ height: "100%", width: '100%', resizeMode: "cover" }} />
                </View>
                <View style={{ flex: 1, }}></View>
            </View>

            <View style={{ position: 'absolute', paddingTop: StatusBar.currentHeight, height: height }}>

                <View style={{ height: height * 0.25, width: width }}>
                    <View style={{ height: height * 0.04, justifyContent: "space-between", alignItems: "flex-end", flexDirection: "row", marginHorizontal: width * 0.055 }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}><Feather name="chevron-left" size={width * 0.07} color="black" /></TouchableOpacity>
                        <TouchableOpacity><Entypo name="dots-three-vertical" size={width * 0.05} color="black" /></TouchableOpacity>
                    </View>

                </View>
                <View style={{ height: height * 0.2, backgroundColor: 'white', marginHorizontal: width * 0.055, borderRadius: 10, padding: height * 0.015, elevation: 2 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: height * 0.088, width: height * 0.088, borderRadius: 10, overflow: "hidden", backgroundColor: 'white' }}>
                                <Image source={require("../assets/image/hill3.jpg")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                            </View>
                        </View>
                        <View style={{ flex: 3, }}>
                            <View style={{ flex: 1, justifyContent: "space-between", paddingLeft: width * 0.02 }}>
                                <Text style={{ fontSize: width * 0.042, fontWeight: "bold", color: '#46aeff' }} >Zermatt</Text>
                                <Text style={{ fontSize: width * 0.031, fontWeight: "bold", color: "#46aeff", opacity: 0.8 }}>Switzerland</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", paddingLeft: width * 0.02 }}>
                                <Text style={{ fontSize: width * 0.034, fontWeight: "bold", color: "#BFBFBF" }}>Ski Vacations</Text>
                            </View>



                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text numberOfLines={3} style={{ fontSize: width * 0.0322, color: "#808080", fontWeight: "bold", opacity: 0.8, }}>Zermatt is known throughout the world for its skiing, especially Triftji for its moguls. Zermatt is famed as a mountaineering and ski resort of the Swiss Alps. </Text>
                    </View>
                </View>
                <View style={{ height: height * 0.09, marginTop: height * 0.02, marginHorizontal: width * 0.055, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
                        <View style={{ height: height * 0.05, width: height * 0.05, backgroundColor: 'white' }}>
                            <Image source={require("../assets/icons/house.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={{ fontSize: width * 0.035, fontWeight: 'bold', color: "#46aeff" }}>Hotel</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
                        <View style={{ height: height * 0.05, width: height * 0.05, backgroundColor: 'white' }}>
                            <Image source={require("../assets/icons/parking.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={{ fontSize: width * 0.035, fontWeight: 'bold', color: "#46aeff" }}>Parking</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
                        <View style={{ height: height * 0.05, width: height * 0.05, backgroundColor: 'white' }}>
                            <Image source={require("../assets/icons/wind.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={{ fontSize: width * 0.035, fontWeight: 'bold', color: "#46aeff" }}>4°C</Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginHorizontal: width * 0.055, marginVertical: width * 0.02 }}>
                    <View style={{ height: '18%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: width * 0.047, fontWeight: 'bold',letterSpacing:1 }}>About</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:width*0.04,textAlign:"auto"}}>Zermatt is famous for its magnificent long ski runs, with terrain for all skill levels, but it also offers outdoor sports for other seasons. There is a mountain trail for cyclists from the Winkelmatten up to the Furi, and the Zermatt Alpin Center offers expert guides for climbers year-round.</Text>
                    </View>
                </View>
                <LinearGradient
                    colors={['#eef0fd', '#bdccfd']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ height: height * 0.09, bottom: 0, marginHorizontal: width * 0.055, borderRadius: 10, flexDirection: "row", justifyContent: 'space-between', alignItems: "center", paddingHorizontal: width * 0.02 }}>
                    <Text style={{ fontSize: width * 0.07, fontWeight: "bold", opacity: 0.9, color: "#5682fb" }}>₹ 15,000</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <LinearGradient
                            colors={['#44b1fa', '#5c7dfb']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} style={{ height: height * 0.07, width: width * 0.3, borderRadius: 10, justifyContent: "center", alignItems: 'center' }} >
                            <Text style={{ color: 'white', fontSize: width * 0.047, fontWeight: 'bold', letterSpacing: 1 }}>Booking</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ height: height * 0.03 }}></View>
            </View>

        </View>
    )
}
// #47b3fa
// #5a81fb