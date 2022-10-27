import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class TravelWorld extends Component {
  render() {
    return (
      <View>
        <View style={styles.lineThree}></View>
        <View style={styles.lineThreeSecond}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    lineThree:{
        height:'10%',
        width:'40%',
        backgroundColor:'black'
    }
})