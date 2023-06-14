import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.09,
    backgroundColor: '#EE9972',
    position:'absolute',
    top:110,
    width:'100%'
  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    
  },
});
