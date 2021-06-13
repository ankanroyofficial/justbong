import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { height, width } from "../constants/Constant";
import { scale } from "../constants/Scale";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


export default function Shop() {
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
          <Text style={{ fontSize: 20, color: "blue" }}>Shop in </Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 10, color: "#db82fb" }}>Mecheda</Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={width * 0.05} color="black" />
      </View>
      <FlatList
        data={[
          { key: "Devin",org:"Prakash Maity",Phone:"9686263502" },
          { key: "Dan",org:"Prakash Maity",Phone:"9686263502"},
          { key: "Dominic",org:"Prakash Maity",Phone:"9686263502" },
          { key: "Jackson",org:"Prakash Maity",Phone:"9686263502" },
          { key: "James",org:"Prakash Maity",Phone:"9686263502" },
          { key: "Joel",org:"Prakash Maity",Phone:"9686263502" },
          { key: "John",org:"Prakash Maity",Phone:"9686263502" },
          { key: "Jillian",org:"Prakash Maity",Phone:"9686263502" },
          { key: "Jimmy",org:"Prakash Maity",Phone:"9686263502" },
          { key: "Julie",org:"Prakash Maity",Phone:"9686263502"},
        ]}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={{
              flex:1,
              marginHorizontal: scale(20),
              marginVertical: scale(10),
              backgroundColor: "#44b6fa",
              height: scale(500),
              borderRadius: scale(20),
              elevation: scale(10),
              overflow: "hidden",
            }}
          >
            <View style={{ flex: 1}}>
              <View
                style={{
                  height: scale(300),
                  backgroundColor: "white",
                  
                }}
              ></View>
              <View style={{flexDirection:'row'}}>
                  <View style={{ marginLeft: scale(20),flex:1,justifyContent:'center' }}>
                    <Text style={{fontSize:scale(45)}}>{item.key}</Text>
                    <Text style={{fontSize:scale(35),color:'white'}}>{item.org}</Text>

                    <Text style={{fontSize:scale(40),color:'white'}}>{item.Phone}</Text>
                  </View>
                  <View style={{alignItems:'center',justifyContent:"center",marginRight:scale(10)}}>
                    
                    <Feather name="phone-call" size={scale(70)} color="red" />
                  </View>
              </View>
            </View>
          </View>
        )}
      />
      <View style={{height:scale(150)}}>

      </View>
    </View>
  );
}
