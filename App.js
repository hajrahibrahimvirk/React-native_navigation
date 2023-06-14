import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginIn'
import FlatlistMenuPrices from './components/SectionListExercise'
import ImgExercise from './components/ImgExercise'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

function logoTitle() {
  return <Image source={require('./img/littleLemonHeader.png')}
  style={{
    height: 40,
    width:300,
    resizeMode:'contain',
    alignSelf:'center'
  }}/>
}

export default function App() {


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator ();

  return (
    
   <NavigationContainer
   styles={styles.container}>

      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Welcome" component={ImgExercise} />
        <Drawer.Screen name="Menu" component={FlatlistMenuPrices} />
      </Drawer.Navigator>
   
   {/* <Tab.Navigator
   screenOptions={({route}) => ({
    tabBarIcon: ({ focused, color, size }) =>{
      let iconName;

      if(route.name === 'Welcome'){
        iconName = focused
        ? 'information-circle'
        : 'information-circle-outline'
      }else if(route.name === 'Menu'){
        iconName = 'list'
      }
      return <Ionicons name={iconName} size={size} color={color}/>
    },
    tabBarActiveTintColor : 'tomato',
    tabBarActiveTintColor : 'gray'
   })}>
        <Tab.Screen name="Welcome" component={ImgExercise} />
        <Tab.Screen name="Menu" component={FlatlistMenuPrices} />
      </Tab.Navigator> */}

      {/* <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{headerStyle:{backgroundColor:'#333333', }, headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      }}}>
        <Stack.Screen name="Welcome" component={ImgExercise} 
        options={{
          title:'Home',
          headerTintColor:(props)=><logoTitle {...props}/>
        }}/>
        <Stack.Screen name="Menu" component={FlatlistMenuPrices} />
      </Stack.Navigator> */}

    </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});   

