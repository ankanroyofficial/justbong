import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { height, width } from "../constants/Constant";
import { scale } from "../constants/Scale";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function News() {
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <StatusBar />
      <View
        style={{
          flexDirection: "row",
          height: height * 0.04,
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: scale(40),
          marginVertical: scale(30),
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 20, color: "blue" }}>News </Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 10, color: "#db82fb" }}>Events</Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={width * 0.05} color="black" />
      </View>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => (
          <View
            style={{
              marginHorizontal: scale(20),
              marginVertical: scale(10),
              backgroundColor: "#fa796a",
              height: scale(400),
              borderRadius: scale(20),
              elevation: scale(10),
              overflow: "hidden",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  height: scale(400),
                  backgroundColor: "white",
                  width: scale(400),
                }}
              ></View>
              <View style={{ marginLeft: scale(20),flex:1 }}>
                <Text style={{fontSize:scale(50)}} numberOfLines={2}>{item.key}</Text>
                <Text style={{fontSize:scale(35)}} numberOfLines={3}>{item.key}</Text>
              </View>
              <View style={{height:scale(200),alignItems:'center',justifyContent:'center',marginRight:scale(20)}}>
              <FontAwesome5 name="arrow-alt-circle-right" size={scale(100)} color="white" />
                </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
