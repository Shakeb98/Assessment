import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import myStyles from './mySyles'
import InputText from './InputText'

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={myStyles.startedText}>Let's Get Started</Text>
        <Text style={myStyles.createText}>Create an account to Q Allure to get all features</Text>
      </View>
    )
  }
}