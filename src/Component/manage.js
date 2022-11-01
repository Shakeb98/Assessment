import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class Manage extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image
                    style={styles.accountLogo}
                    source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/user.png')} />
                <Text style={styles.Text}>manage</Text>
                <Image
                    style={styles.bellLogo}
                    source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/appointment-reminders.png')} />
            </View>
        )
    }
}
