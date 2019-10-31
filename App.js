
import React from 'react'
import {

  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image


} from 'react-native'

const App = () => {
  return (
    <View style={styles.imgBackground}>

      <Image
          style={{ alignItems: "center", width: 340, height: 290, marginTop: 50,}}
          source={require('./src/logo.png')}/>
      <Image source={require('./src/bgGrey.png')}/>
    </View>
  )
}
 const styles = StyleSheet.create({

  //headline: {
    //textAlign: 'center',
    //fontWeight: 'bold',
    //fontSize: 30,
   // marginBottom: 30,
    //width: 370,
    //color: '#000000'
    
  //},
   //question : {
   // textAlign: 'center',
    // color: '#ffffff',
    // fontSize : 20,
    // marginBottom: 10,
  // },
    //respost : {
  // textAlign: 'center',
  // color: '#ffffff',
   //fontSize : 20,
   //marginBottom: 10,
 //},
 //background: {
  // alignItems: 'center',
   
 //},
 imgBackground: {
  flex: 1,
  alignItems: 'center'
 } 
 })


export default App
