import * as React from 'react'
import {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

export default function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const Welcome = () =>(
        <View style={styles.welcome}>
        <Text style={styles.welcomeText}>
            Welcome to Little Lemon
            <Text>
            {'\n\n\n'}You are logged in
            </Text>
        </Text>
    </View>
    )


  return (
    <View style={styles.container}>
{ isLoggedIn  && 
    <View>
    <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
      style={styles.input}
      placeholder='Email'
      value={email} 
      onChange={setEmail}
       >
      
      </TextInput>
      <TextInput
      style={styles.input}
      placeholder='Password'
      onChange={setPassword}
      value={password}
      secureTextEntry={true}
     >
   
      </TextInput></View>}
      <Pressable
      style={styles.loginButton}
      onPress={()=>
      {setIsLoggedIn(!isLoggedIn)}}>
        <Text style={styles.loginButtonText}>
           {isLoggedIn? 'Login':<Welcome/>}
        </Text>
      </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input:{
    height: 60, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    backgroundColor: '#FFF',
    borderRadius:10
  },
  loginButton:{
    height: 60,  
    marginTop:40,
    marginLeft:90,
    marginRight:90,
    borderWidth: 1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFF',
    borderRadius:10,
  },
  loginButtonText:{
    fontSize: 26, 
    fontWeight:'bold',
  },
  welcome:{
  
    height:200,
    padding:20,
    margin:20
  },
  welcomeText:{
    backgroundColor: 'grey',
    fontSize:25,
    height:200,
    padding:5,
    marginLeft:-60,
    marginTop:-30,
    textAlign:'center',
    color:'white',
    borderRadius:10
  }
});

