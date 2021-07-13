import React,{useState,useEffect} from "react";
import { View, Text, FlatList, StatusBar,ActivityIndicator } from "react-native";
import { height, width } from "../constants/Constant";
import { scale } from "../constants/Scale";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import Header from '../component/Header'
import firebase from 'firebase'


export default function Shop({navigation}) {
  const [services,setServices]=useState([])
  const [loading,setLoading]=useState(false)
  
  const getData=()=>{
      setLoading(true)
      firebase.firestore().collection('shop').onSnapshot((querySnapshot) => {
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
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <StatusBar backgroundColor="#29293d" />
      <Header title={"Shop in"} navigation={navigation} subTitle={"Mecheda"} />
      {
        loading ? <ActivityIndicator size="large" color="red" />
        :<FlatList
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
          data={services}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                flex:1,
                marginHorizontal: scale(20),
                marginVertical: scale(20),
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
                    alignItems:'center',
                    justifyContent:'center'
                  }}
                ><FontAwesome5 name="shopify" size={scale(150)} color="black" /></View>
                <View style={{flexDirection:'row'}}>
                    <View style={{ marginLeft: scale(20),flex:1,justifyContent:'center' }}>
                      <Text style={{fontSize:scale(45),color:'white'}}>{item.shopName}</Text>
                      <Text style={{fontSize:scale(35),color:'white'}}>{item.owner}</Text>
  
                      <Text style={{fontSize:scale(40),color:'white'}}>{item.phone}</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:"center",marginRight:scale(10)}}>
                      
                      <Feather name="phone-call" size={scale(70)} color="red" />
                    </View>
                </View>
              </View>
            </View>
          )}
        />

      }
      
      
     
    </View>
  );
}
