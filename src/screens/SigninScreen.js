import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Signin Screen</Text>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 48
  }
})