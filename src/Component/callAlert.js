import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class callAlert extends Component {
    render() {
        return (
            <View style={styles.callAlerts}>
                <View style={styles.call}>
                    <Image style={styles.missedCall} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/download(2).jpeg')} />
                    <Text>missed</Text>
                    <Text>call alerts</Text>
                </View>
                <View style={styles.call}>
                    <Image style={styles.missedCall} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-gift-valentines-day-flatart-icons-lineal-color-flatarticons-3.png')} />
                    <Text>rewards &</Text>
                    <Text>coupons</Text>
                </View>
                <View style={styles.call}>
                    <Image style={styles.missedCall} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/user-design-260nw-236977519.webp')} />
                    <Text>refer</Text>
                    <Text>prepaid</Text>
                </View>
            </View>
        )
    }
}