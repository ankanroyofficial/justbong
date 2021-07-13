import React from 'react'
import { View, Text,ScrollView,Image } from 'react-native'
import ChildHeader from '../component/ChildHeader'
import { scale } from '../constants/Scale'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function About({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <ChildHeader navigation={navigation} title={'About'} />
            <ScrollView>
                <View style={{marginLeft:scale(20),marginVertical:scale(20),borderTopLeftRadius:scale(10),borderBottomLeftRadius:scale(10),backgroundColor:'#B294EC',padding:scale(20)}}>
                    <Text style={{color:'white',fontSize:scale(40)}}>Currently Any Listing in this app is Non-Paid !</Text>
                    <Text style={{color:'white',fontSize:scale(40)}}>For listing your Services then Contact below.</Text>
                </View>
            <View style={{ marginHorizontal: scale(30) }}>
                {/* <Text style={{ fontSize: scale(60) }}>Our Team</Text> */}
                <View style={{ alignItems: 'center', justifyContent: "center", marginVertical: scale(5) }}>
                    <View style={{flexDirection:'row',backgroundColor: '#B294EC', height: scale(300), width: scale(1000), borderRadius: scale(20),marginVertical:scale(10) }}>
                    <View style={{flex:1,overflow:'hidden'}}>
                            <Image source={{uri:"https://scontent.frdp1-1.fna.fbcdn.net/v/t1.6435-9/125528509_1723473994488532_3721260242903946514_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=E3DhQuNk5kIAX-QzD9T&_nc_ht=scontent.frdp1-1.fna&oh=482f4156d6af384c189d1b885d3f3eee&oe=60DDE850"}} style={{width:'100%',height:'100%',}} resizeMode="cover" />
                    </View>
                    <View style={{flex:2,padding:scale(20)}}>
                        <Text style={{fontSize:scale(50),color:'white'}}>Smriti Swraup Maity <MaterialIcons name="verified" size={scale(60)} color="#3EEF1E" /></Text>
                        <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',flexDirection:'row'}}>
                             <Entypo name="facebook-with-circle" size={scale(80)} color="blue" style={{margin:scale(20)}} />
                             <FontAwesome name="whatsapp" size={scale(80)} color="#2EFB84" style={{margin:scale(20)}} />
                             <MaterialCommunityIcons name="gmail" size={scale(80)} color="#DA400A" style={{margin:scale(20)}} />
                        </View>
                    </View>
                    </View>

                    <View style={{flexDirection:'row',backgroundColor: '#B294EC', height: scale(300), width: scale(1000), borderRadius: scale(20),marginVertical:scale(10) }}>
                    <View style={{flex:1,overflow:'hidden'}}>
                            <Image source={{uri:"https://scontent.frdp1-1.fna.fbcdn.net/v/t1.6435-9/49180838_379030209519995_8715875213645971456_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ld1SXa1yGAYAX-Xh_E6&_nc_oc=AQncFWdoDXCaeYcZ9QIVQgqHXwHIfAvqc5_ClDML3057S-ClWqT0EnYOwO9v6DwUCsbULRB6a6J7BFRWfS3gUYC0&_nc_ht=scontent.frdp1-1.fna&oh=49431b63403a4b8946ba376f5357e976&oe=60DD65F2"}} style={{width:'100%',height:'100%',}} resizeMode="cover" />
                    </View>
                    <View style={{flex:2,padding:scale(20)}}>
                    <Text style={{fontSize:scale(50),color:'white'}}>Anirban Maity <MaterialIcons name="verified" size={scale(60)} color="#3EEF1E" /></Text>
                    <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',flexDirection:'row'}}>
                             <Entypo name="facebook-with-circle" size={scale(80)} color="blue" style={{margin:scale(20)}} />
                             <FontAwesome name="whatsapp" size={scale(80)} color="#2EFB84" style={{margin:scale(20)}} />
                             <MaterialCommunityIcons name="gmail" size={scale(80)} color="#DA400A" style={{margin:scale(20)}} />
                        </View>
                    </View>
                    </View>

                    <View style={{flexDirection:'row',backgroundColor: '#B294EC', height: scale(300), width: scale(1000), borderRadius: scale(20),marginVertical:scale(10) }}>
                    <View style={{flex:1,overflow:'hidden'}}>
                            <Image source={{uri:"https://scontent.frdp1-1.fna.fbcdn.net/v/t1.6435-9/30727375_1382115935267834_8207390767002419200_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=VhdGUBBLR4QAX9ypfNF&_nc_oc=AQnvvjrEylXD8AV_v1t85aiMU4QfppQSSDtw85W-NJNMIsmOBtm3yR3hn5CAa36E6K42C8nNYmVN9QYzslhPcIwo&tn=groib09Yc-x3Z_bn&_nc_ht=scontent.frdp1-1.fna&oh=1196c439d9738d4159d7a580d8cf09bd&oe=60DD358B"}} style={{width:'100%',height:'100%',}} resizeMode="cover" />
                    </View>
                    <View style={{flex:2,padding:scale(20)}}>
                    <Text style={{fontSize:scale(50),color:'white'}}>Prakash Maity <MaterialIcons name="verified" size={scale(60)} color="#3EEF1E" /></Text>
                    <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',flexDirection:'row'}}>
                             <Entypo name="facebook-with-circle" size={scale(80)} color="blue" style={{margin:scale(20)}} />
                             <FontAwesome name="whatsapp" size={scale(80)} color="#2EFB84" style={{margin:scale(20)}} />
                             <MaterialCommunityIcons name="gmail" size={scale(80)} color="#DA400A" style={{margin:scale(20)}} />
                        </View>
                    </View>
                    </View>


                </View>

            </View>
            </ScrollView>
            
        </View>
    )
}
