import React,{useState,useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { height, width } from '../constants/Constant'
import firebase from 'firebase'
import { scale } from '../constants/Scale'

export default function DestinationScroll(props) {

const [services,setServices]=useState([])


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

    useEffect(() => {
        firebase.firestore().collection('Services').onSnapshot((querySnapshot) => {
            const user = [];
    
            querySnapshot.forEach((item) => {
              user.push({
                ...item.data(),
                key: item.id,
              });
            });
    
            setServices(user);
          });
        return () => {
            
        }
    }, [])
    return (
        <View style={{ height: height * 0.38, marginTop: height * 0.02, backgroundColor: 'white' }}>
            <View style={{ height: height * 0.05, justifyContent: "space-between", marginHorizontal: width * 0.055, flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontSize: width * 0.048, fontWeight: 'bold' }}>Latest Services</Text>
                <TouchableOpacity >
                    <Text style={{ fontSize: width * 0.039, fontWeight: 'bold' }}>Show All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {services.map((item, index) => (
                        <View key={index} style={{ height: "100%", width: width * 0.35, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: width * 0.03, marginRight: (index % (data.length) - (data.length - 1) == 0) ? width * 0.03 : 0 }}>
                            <TouchableOpacity  activeOpacity={0.8} onPress={() => { props.navigation.navigate("PlaceDetails",{
                                category:item.category,description:item.description,image:item.image,organization:item.organization,phone:item.phone,place:item.place,title:item.title,
                            }) }} style={{ height: height * 0.20, backgroundColor: '#e6e6e6', width: width * 0.35, borderRadius: 10, overflow: "hidden" }}>
                                <Image source={{uri:item.image}} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                            </TouchableOpacity>
                            <Text numberOfLines={2} style={{ fontSize: width * 0.035, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
