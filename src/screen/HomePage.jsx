import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { height, width } from "../constants/Constant";
import TypeOfBooking from "../component/TypeOfBooking";
import DestinationScroll from "../component/DestinationScroll";
import Carousel from "react-native-carousel";
import { scale } from "../constants/Scale";
import { Ionicons } from "@expo/vector-icons";
import TimeTable from '../component/TimeTable'
import CovidTiker from "../component/CovidTiker";

import firebase from "firebase";

export default function HomePage({ navigation }) {
  const [banner, setBanner] = useState([]);

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
        paddingHorizontal:scale(10),
        paddingVertical:scale(20)
      }}
    >
      <StatusBar />
      <View style={{ height: height }}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              height: height * 0.04,
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: width * 0.055,
            }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 20, color: "blue" }}>Just Bong </Text>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontSize: 10, color: "#db82fb" }}>মেছেদা</Text>
              </View>
            </View>
            <Entypo
              name="dots-three-vertical"
              size={width * 0.05}
              color="black"
            />
          </View>

          <View style={{ height: "15%", width: "100%", padding: 10 }}>
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

          <View style={{ height: height * 0.11 }}></View>
        </ScrollView>
      </View>
    </View>
  );
}
