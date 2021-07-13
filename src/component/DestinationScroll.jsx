import React,{useState,useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image,ActivityIndicator } from 'react-native'
import { height, width } from '../constants/Constant'
import firebase from 'firebase'
import { scale } from '../constants/Scale'
import { Ionicons } from '@expo/vector-icons'; 

export default function DestinationScroll(props) {

const [services,setServices]=useState([])
const [loading,setLoading]=useState(false)

const getData=()=>{
    setLoading(true)
    firebase.firestore().collection('Services').onSnapshot((querySnapshot) => {
        const user = [];

        querySnapshot.forEach((item) => {
          user.push({
            ...item.data(),
            key: item.id,
          });
        });

        setServices(user);
        setLoading(false);
      });
}

    useEffect(() => {
        getData();
        return () => {
           
        }
    }, [])
    return (
        <View style={{ height: height * 0.38, marginTop: height * 0.02, backgroundColor: 'white' }}>
            <View style={{ height: height * 0.05, justifyContent: "space-between", marginHorizontal:scale(30), flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontSize: width * 0.048, fontWeight: 'bold' }}>Latest Services</Text>
                {/* <TouchableOpacity >
                    <Text style={{ fontSize: width * 0.039, fontWeight: 'bold' }}>Show All</Text>
                </TouchableOpacity> */}
            </View>
            {
                loading ?<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="#00ff00" />

                </View> :<View style={{ flex: 1, flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {services.slice(0,5).map((item, index) => (
                        <View key={index} style={{ height: "100%", width: width * 0.35, justifyContent: 'space-evenly', alignItems: 'center', marginLeft: width * 0.03, marginRight: (index % (services.length) - (services.length - 1) == 0) ? width * 0.03 : 0 }}>
                            <TouchableOpacity  activeOpacity={0.8} onPress={() => { props.navigation.navigate("PlaceDetails",{
                                category:item.category,description:item.description,image:item.image,organization:item.organization,phone:item.phone,place:item.place,title:item.title,
                            }) }} style={{ height: height * 0.20, backgroundColor: '#e6e6e6', width: width * 0.35, borderRadius: 10, overflow: "hidden",alignItems:'center',justifyContent:'center',elevation:scale(5) }}>
                                {
                                    item.image ? <Image source={{uri:item.image}} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                                     :<Ionicons name="md-image-outline" size={scale(200)} color="black" />
                                }
                               
                            </TouchableOpacity>
                            <Text numberOfLines={2} style={{ fontSize: width * 0.035, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            }
            
        </View>
    )
}
