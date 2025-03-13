import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Btn</Text>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'black' 
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20,   
    fontWeight: 'bold' 
  }
})
