import { StatusBar } from 'expo-status-bar';
import {TextInput,Image, StyleSheet, Text, View } from 'react-native';
import logo from './login.jpeg';
/*import React, { useState } from 'react';*/


export default function App() {
  /*const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');*/
  return (
    <View style={styles.container}>
       <Image source={logo} style={styles.pic} /> 
      <Text style={styles.login}>Login</Text>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="User Name"
    placeholderTextColor="black"
   /* onChangeText={(username) => setUsername(username)}*/ /></View>  

<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password"
    placeholderTextColor="black"
    secureTextEntry={true}
   /* onChangeText={(password) => setPassword(password)}*/ /></View>

<Text style={styles.rmmbr}>Remember me</Text>

{/*<View>
<Pressable onPress={onPressFunction} style={styles.press}>
 
</Pressable></View>*/}



<Text style={styles.text2}>Don’t have an account. please contact the admin</Text>




</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pic: {
  width:415,
  height:450,
  marginTop:-180,
  position:'relative'
  },

 login:{
    fontWeight:'500',
    fontSize: 20,
    lineHeight:24,
    width:350,
    top:35,
    marginBottom:-20
    
  },

  inputView: {
    backgroundColor: "white",
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 380,
    height: 65,
    marginTop:60,
   marginBottom:-50 ,
    alignItems: "center",
  },
  
  TextInput: {
    fontSize: 20,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -260,
  },

  rmmbr:{
    marginTop:90,
    marginLeft:-200,
    fontSize:20
  },

  text2:{
    marginLeft:-3,
    fontSize:13,
    position:'absolute',
    top:850
  }

 


});
