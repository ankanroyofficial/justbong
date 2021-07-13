import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, Image, ScrollView,Modal,Alert,Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { height, width } from "../constants/Constant";
import TypeOfBooking from "../component/TypeOfBooking";
import DestinationScroll from "../component/DestinationScroll";
import Carousel from "react-native-carousel";
import { scale } from "../constants/Scale";
import TimeTable from '../component/TimeTable'
import CovidTiker from "../component/CovidTiker";
import Header from '../component/Header'

import firebase from "firebase";

export default function HomePage({ navigation }) {
  const [banner, setBanner] = useState([]);
  const [loading,setLoading]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);


  const getData = () => {
    firebase
      .firestore()
      .collection("banner")
      .onSnapshot((querySnapshot) => {
        const user = [];

        querySnapshot.forEach((item) => {
          user.push({
            ...item.data(),
            key: item.id,
          });
        });

        setBanner(user);
      });
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        // paddingTop: StatusBar.currentHeight,
       
       
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
          <View style={{height:scale(500),width:scale(1000),backgroundColor:"white",borderRadius:scale(20),elevation:scale(10)}}>
            <Text>Hello World!</Text>
            <Pressable
              
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </Pressable>
            <View style={{position:'absolute',top:0,right:0,width:scale(100),height:scale(100),backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
              <Text>X</Text>
            </View>
          </View>
         
        </View>
      </Modal>
      <StatusBar backgroundColor="#29293d" />
      <Header title={'Just Bong'} subTitle={'মেছেদা'} navigation={navigation} />
      <View style={{ height: height }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
         
          

          <View style={{ height:scale(450), width: "100%", padding: 10 }}>
            <Carousel
              hideIndicators={true}
              animate={true}
              delay={2500}
              loop={true}
            >
              <Image
                source={require("../assets/image/1.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
              <Image
                source={require("../assets/image/2.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
              <Image
                source={require("../assets/image/3.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
            </Carousel>
          </View>

          <TypeOfBooking navigation={navigation} />
          <DestinationScroll navigation={navigation} />
          <CovidTiker />
          <TimeTable />
          
          <View style={{ width: "100%", height: scale(400) }}></View>

        </ScrollView>
      </View>
    </View>
  );
}
