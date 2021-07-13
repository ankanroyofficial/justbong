import React,{useState,useEffect} from "react";
import { View, Text, FlatList, StatusBar,Image,ActivityIndicator } from "react-native";
import { scale } from "../constants/Scale";
import Header from '../component/Header'
 import firebase from 'firebase'
 import { Ionicons } from '@expo/vector-icons'; 


export default function Notification({navigation}) {


  const [services,setServices]=useState([])
const [loading,setLoading]=useState(false)

const getData=()=>{
    setLoading(true)
    firebase.firestore().collection('Notification').onSnapshot((querySnapshot) => {
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
     <Header title={"Notification"} navigation={navigation} subTitle={"Event"} />
     {
       loading ? <ActivityIndicator size="large" color="red" /> : <FlatList
       showsVerticalScrollIndicator ={false}
       showsHorizontalScrollIndicator={false}
         data={services}
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
                   alignItems:'center',
                   justifyContent:"center"
                 }}
               >
                 {
                   item.image ? <Image source={{uri:item.image}} style={{width:"100%",height:"100%",resizeMode:"contain"}} />
                   :<Ionicons name="images" size={scale(100)} color="black" />
                 }
               </View>
               <View style={{ marginLeft: scale(20),flex:1 }}>
                 <Text style={{fontSize:scale(50)}} numberOfLines={2}>{item.title}</Text>
                 <Text style={{fontSize:scale(35)}} numberOfLines={3}>{item.news}</Text>
               </View>
               <View style={{height:scale(200),marginRight:scale(20),marginTop:scale(10)}}>
                   <Text style={{color:'white'}}>{item.date}</Text>
                 </View>
             </View>
           </View>
         )}
       />
     }
      
    
    </View>
  );
}
