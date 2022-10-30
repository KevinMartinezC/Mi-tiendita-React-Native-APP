import Navigation from "./src/Navigation";
import React, {useState, useEffect} from 'react';
import NetInfo from "@react-native-community/netinfo";
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Icon} from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const [checkConection, setCheckConection] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {

        NetInfo.fetch().then(state => {
          console.log("Connection type", state.type);
          console.log("Is connected?", state.details);
          if(state.isInternetReachable == true){
          setCheckConection(true);
          console.log(checkConection);
          }else{
            setCheckConection(false)
            console.log(checkConection);
          }
        });
      
       
      
  });
  unsubscribe();
    }); 
   

  return (
  <>
    {checkConection ? (
    <Navigation/>
  ):(
    <View style={styles.content}>
    <Icon type='material-community' name='alert-outline' size={80}/>
    <Text style={styles.text}>Necesitas tener conexión a internet para utilizar la aplicación</Text>
  </View>
    
  )} 
  </>
  )
}


export const styles = StyleSheet.create({
  content:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },
  text:{
      fontSize:20,
      fontWeight:"bold",
      marginTop:20,
  }
});