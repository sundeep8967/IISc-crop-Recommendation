import { StyleSheet,Button, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Firstbox } from './Firsbox';
import { Secondbox } from './Secondbox';
import Buttonn from './button';
import { StatusBar } from 'expo-status-bar';

import { showMessage, hideMessage } from "react-native-flash-message";
import { SafeAreaView } from 'react-native';
import FlashMessage from "react-native-flash-message";

export default function Home({navigation}) {
    const [season, setSeason] = useState('')

    const[crop,setCrop]=useState('')
  
    useEffect(()=> {
      console.log({season,crop})
    }, [{season,crop}])
     
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
          <View style={styles.fb}>
            <Firstbox setSeason={setSeason}/>
            <Secondbox season={season} setCrop={setCrop}/>   
          </View> 
          <View style={styles.button} >
            <Button title='Get Data' style={{flex:1}} onPress={()=> {
              if(season === '' || crop===''){
                  showMessage({
              message: "Please fill all details",
              type: "info",
            });
              }else{

              navigation.navigate('Data', {
              season: season,
              crop: crop
              })
              }
            }}/>
          </View>   
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
     
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    fb:{
        paddingTop: 20,
        flex: 1,
        maxHeight: 300,
    },
    button: {
        flex: 1,
        width: 150
    },
    sb:{
        flex:1
    },
  
  });
  