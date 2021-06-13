import React, { useEffect,useState } from "react";
import { View, Text,Image } from "react-native";
import { scale } from "../constants/Scale";

export default function CovidTiker() {

    const [covidData,setCovidData]=useState();

  useEffect(() => {
   

    return () => {};
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#fcdc3b",
        margin: scale(25),
        height: scale(400),
        borderRadius: scale(20),
        padding: scale(15),
      }}
    >
     
        <Image source={{uri:"https://kaveri.edu.in/kcasc/wp-content/uploads/sites/4/2020/06/COVID-19-Graphic-web-banner-1024x358.jpg"}} style={{width:'100%',height:"100%"}} resizeMode='contain' />
    
    </View>
  );
}
