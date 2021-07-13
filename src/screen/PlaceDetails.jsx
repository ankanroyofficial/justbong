import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Linking
} from "react-native";
import ChildHeader from '../component/ChildHeader'
import { height } from "../constants/Constant";
import { scale } from "../constants/Scale";
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


export default function PlaceDetails({ navigation, route }) {
  console.log(route.params);



  const { category, description, image, organization, phone, place, title } =
    route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <ChildHeader title={category} navigation={navigation} />

      <View style={{}}>

      </View>
      <View style={{ margin: scale(20), height: scale(400), alignItems: 'center', justifyContent: 'center' }}>
        {
          image ? <Image source={{ uri: image }} blurRadius={scale(5)} style={{ width: "100%", height: "100%", resizeMode: "cover" }} /> : <>
            <EvilIcons name="image" size={scale(400)} color="black" />
            <Text>No image to show !</Text>

          </>
        }

      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:scale(-280)}}>
      <Image source={{ uri: image }} style={{ width: scale(400), height: scale(400), resizeMode: "cover",borderRadius:scale(10) }} />
      </View>
      <View style={{ marginLeft: scale(25),marginTop:scale(20) }}>
        <View style={{backgroundColor:'#AC97F5',padding:scale(10),borderTopLeftRadius:scale(20)}}>
         <Text style={{ fontSize: scale(50),color:'white' }}>{title}</Text>
         <Text style={{ fontSize: scale(40),color:'white' }}>({category})</Text>
        </View>
       
        
        <Text style={{ fontSize: scale(45),margin:scale(5) }}><Entypo name="user" size={scale(50)} color="orange" /> Owner : {organization}</Text>
        <Text style={{ fontSize: scale(45),margin:scale(5) }}><FontAwesome name="phone" size={scale(50)} color="green" /> Contact : {phone}</Text>
        <Text style={{ fontSize: scale(45),margin:scale(5) }}><Entypo name="location-pin" size={scale(50)} color="red" />Service Area : All over Mecheda</Text>
      </View>
      <View style={{ marginLeft: scale(25), flex: 1 }}>
        <ScrollView>
        <View style={{backgroundColor:'#AC97F5',padding:scale(10),borderTopLeftRadius:scale(20)}}>
          <Text style={{ fontSize: scale(50),color:'white' }}>About</Text>
          </View>
          <View style={{padding:scale(10)}}>
          <Text style={{ fontSize: scale(45) }} numberOfLines={8}>{description}</Text>
          </View>
          
        </ScrollView>


      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: scale(20) }}>
        <Pressable onPress={() => { Linking.openURL(`tel:${phone}`) }}>
          <View style={{ height: scale(200), width: scale(1000), borderRadius: scale(20), backgroundColor: '#3d3d5c', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(80), color: 'white' }}>Call Now  <FontAwesome name="phone" size={scale(100)} color="green" /></Text>
          </View>
        </Pressable>


      </View>




    </View>
  );
}
// #47b3fa
// #5a81fb
