import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.text}>AccountScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   text {
       fontSize: 48
   } 
})

export default AccountScreen;