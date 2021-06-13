import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { height, width } from "../constants/Constant";
import { scale } from "../constants/Scale";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Notification() {
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
          <Text style={{ fontSize: 20, color: "blue" }}>Notification </Text>
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
              backgroundColor: "#db82fb",
              height: scale(200),
              borderRadius: scale(20),
              elevation: scale(10),
              overflow: "hidden",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  height: scale(200),
                  backgroundColor: "white",
                  width: scale(200),
                }}
              ></View>
              <View style={{ marginLeft: scale(20),flex:1 }}>
                <Text style={{fontSize:scale(50)}} numberOfLines={2}>{item.key}</Text>
                <Text style={{fontSize:scale(35)}} numberOfLines={3}>{item.key}</Text>
              </View>
              <View style={{height:scale(200),marginRight:scale(20),marginTop:scale(10)}}>
                  <Text style={{color:'white'}}>15.06.2021</Text>
                </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
