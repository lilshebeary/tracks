import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, Input, Button } from 'react-native-elements'

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