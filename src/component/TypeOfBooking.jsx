import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5,AntDesign} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { height, width } from '../constants/Constant';
import { Fontisto } from '@expo/vector-icons'; 




export default function TypeOfBooking({navigation}) {



    const onCategoryHandelar=(id,cName)=>{
        navigation.navigate('PlaceList',{
            id:id,
            cname:cName
        })
    }

    return (
        <View style={{ height: height * 0.2, marginTop: height * 0.02, justifyContent: 'center', alignItems: 'center', marginHorizontal: width * 0.055 ,backgroundColor:'white'  }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(1,"Doctor")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#6f99fb', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                <Fontisto name="doctor" size={width * 0.06} color="white"  />
                </Pressable>
                <Text>Doctor</Text>
            </View>

            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(2,"Hospital")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#fcdc3b', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                <FontAwesome name="hospital-o" size={width * 0.07} color="white" />
                    
                </Pressable>
                <Text>Hospital</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(3,"Ambulance")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#db82fb', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <FontAwesome name="ambulance" size={width * 0.052} color="white" />
                </Pressable>
                <Text>Ambulance</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(4,"Car")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#f56abe', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <FontAwesome5 name="taxi" size={width * 0.05} color="white" />
                </Pressable>
                <Text>Car</Text>
            </View>

        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(5,"Teacher")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#fd9c61', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    <MaterialCommunityIcons name="teach" size={width * 0.06} color="white" />
                </Pressable>
                <Text>Teacher</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(6,"Decorator")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#44b6fa', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                   
                    <AntDesign name="dingding" size={width * 0.052} color="white" />
                </Pressable>
                <Text>Decorator</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(7,"Electrican")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#44c9b1', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                   
                    <MaterialIcons name="electrical-services" size={width * 0.07} color="white" />
                </Pressable>
                <Text>Electrican</Text>
            </View>
            <View style={{ height: '100%', width: '25%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Pressable onPress={()=>{onCategoryHandelar(8,"Water")}} style={{ height: height * 0.058, width: height * 0.058, backgroundColor: '#fa796a', borderRadius: width * 0.025, justifyContent: 'center', alignItems: 'center', elevation: 3 }}>
                    
                    <FontAwesome5 name="hand-holding-water" size={width * 0.07} color="white" />
                </Pressable>
                <Text>Water</Text>
            </View>
        </View>
    </View>
    )
}
