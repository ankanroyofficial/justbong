import React from 'react'
import { View, Text } from 'react-native'
import { height, width } from '../constants/Constant'
export default function Profile() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'steelblue'}}>
            <Text style={{fontWeight:"bold",fontSize:width*0.06,color:'white'}}>Profile</Text>
        </View>
    )
}
