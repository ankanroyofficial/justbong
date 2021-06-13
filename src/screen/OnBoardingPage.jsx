import React from 'react'
import { View, Text, Button, Dimensions, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from "react-native-carousel"
const { height, width } = Dimensions.get("window")
export default function OnBoardingPage({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 2.4, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: "80%", width: "90%" }}>
                    <Carousel
                        hideIndicators={true}
                        animate={true}
                        delay={2500}
                        loop={true}
                    >
                        <Image source={require("../assets/image/h.jpg")} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />

                        <Image source={require("../assets/image/a.jpg")} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                        <Image source={require("../assets/image/e.jpg")} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                        <Image source={require("../assets/image/f.jpg")} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                        <Image source={require("../assets/image/j.png")} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />

                    </Carousel>
                </View>
            </View>
            <View style={{ flex: 0.8 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: width * 0.055 }}>Welcome to Mecheda</Text>
                </View>
                <View style={{ flex: 2, marginHorizontal: width * 0.05 }}>
                    <Text style={{ fontSize: width * 0.04, textAlign: "center" }}>Easy solution to buy tickets for your traval, Business trips,transportation,{"\n"}lodging and culinary</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.navigate("HomePage") }}>
                    <LinearGradient
                        colors={['#44b1fa', '#5c7dfb']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            width: width * 0.65, height: height * 0.07, borderRadius: 12, justifyContent: "center", alignItems: 'center'
                        }}>
                        <Text style={{  fontSize: width*0.047, color: '#fff',fontWeight:"bold",letterSpacing:1 }}>Start</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>
    )
}


{/* <Button onPress={()=>{} title="Next" /> */ }
