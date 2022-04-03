import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SignupScreen = ({ navigation }) => {
  return (
    <>
    <Text style={styles.text} >Signup Screen</Text>
    <Button 
      title='Go to Signin' 
      onPress={() => navigation.navigate('Signin')} 
    />
    <Button 
      title='Go to mainFlow' 
      onPress={() => navigation.navigate('mainFlow')} 
    />
    </>
  
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 48
  }
})