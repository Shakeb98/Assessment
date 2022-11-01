import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class enable extends Component {
    render() {
        return (
            <View style={styles.enable}>
                <Image style={styles.fiveGPlusLogo} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-5G-in-Hyderabad.png')} />
                <Text style={styles.checkText}>Check if your phone is 5G enabled</Text>
                <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
            </View>
        )
    }
}
