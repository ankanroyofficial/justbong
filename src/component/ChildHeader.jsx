import React from 'react'
import { View, Text,Pressable } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { height, width } from "../constants/Constant";
import { scale } from '../constants/Scale';
import { AntDesign } from '@expo/vector-icons'; 



export default function ChildHeader({navigation,title }) {
  return (
    <View style={{ backgroundColor: '#3d3d5c' }}>
      <View
        style={{
          flexDirection: "row",
          height: scale(100),
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: scale(40),
          marginVertical: scale(30),

        }}
      >
       <Pressable onPress={()=>navigation.goBack()}>
       <AntDesign name="left" size={scale(50)} color="white" />
       </Pressable>
          <View>
            <Text style={{color:'white',fontSize:scale(50)}}>{title}</Text>
          </View>
        <Entypo name="dots-three-vertical" size={scale(60)} color="white" />
      </View>
    </View>

  )
}
