import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { scale } from '../constants/Scale';

export default function TimeTable() {
    return (
        <View
            style={{
              margin: scale(25),
              height: scale(400),
              borderRadius: scale(20),
              padding: scale(15),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#6f99fb",
                margin: scale(10),
                borderRadius: scale(20),
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               
                <Ionicons name="bus-outline"  size={scale(150)}
                  color="white"/>
                <Text style={{ color: "white" }}>Bus Time</Text>
              </View>
              <View
                style={{
                  width: scale(200),
                  height: scale(200),
                  backgroundColor: "red",
                  position: "absolute",
                  borderRadius: scale(100),
                  marginLeft: scale(-40),
                  marginTop: scale(-40),
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "white",
                  borderWidth: scale(5),
                }}
              >
                <Text style={{ color: "white" }}>comming</Text>
                <Text style={{ color: "white" }}>Soon!</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#f56abe",
                margin: scale(10),
                borderRadius: scale(20),
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="train-outline"
                  size={scale(150)}
                  color="white"
                />
                <Text style={{ color: "white" }}>Train Time</Text>
              </View>
              <View
                style={{
                  width: scale(200),
                  height: scale(200),
                  backgroundColor: "red",
                  position: "absolute",
                  borderRadius: scale(100),
                  marginRight: scale(-40),
                  marginTop: scale(-40),
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                  right: 0,
                  borderColor: "white",
                  borderWidth: scale(5),
                }}
              >
                <Text style={{ color: "white" }}>comming</Text>
                <Text style={{ color: "white" }}>Soon!</Text>
              </View>
            </View>
          </View>

    )
}
