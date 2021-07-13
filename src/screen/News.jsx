import React,{useState} from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { height, width } from "../constants/Constant";
import { scale } from "../constants/Scale";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import Header from '../component/Header'
import { AntDesign } from '@expo/vector-icons'; 


export default function News({navigation}) {

  const [data,setData]=useState(true)

  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <StatusBar backgroundColor="#29293d" />
      <Header title={"News"} navigation={navigation} subTitle={"Events"} />
      {
        data ?
       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name="exception1" size={scale(200)} color="black" />
        <Text>Currently no Data !</Text>
        </View>
         :<FlatList
      
        showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}
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
      }
      
      
     
    </View>
  );
}
