import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { height, width } from "../constants/Constant";
import { scale } from '../constants/Scale';
import { AntDesign } from '@expo/vector-icons';

export default function Header({ title, subTitle, navigation }) {
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
        <View style={{}}>
          <Text style={{ fontSize: 20, color: "white" }}>{title} </Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 10, color: "#fa796a" }}>{subTitle}</Text>
          </View>
        </View>
        <Pressable onPress={()=>{navigation.navigate('About')}}>
          <AntDesign name="team" size={scale(60)} color="white" />
        </Pressable>


      </View>
    </View>

  )
}
