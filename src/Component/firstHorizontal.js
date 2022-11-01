import { Text, StyleSheet, View ,Image,ScrollView} from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class firstHorizontal extends Component {
    render() {
        return (
            <View style={styles.firstHorizontalView}>
                <ScrollView horizontal={true}>
                    <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('../Icon/Airtel-vs-Jio-vs-Vi-56-Days-Prepaid-Plans-Compared.webp')} />
                    <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('../Icon/Airtel-vs-Jio-vs-Vi-56-Days-Prepaid-Plans-Compared.webp')} />
                    <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('../Icon/Airtel-vs-Jio-vs-Vi-56-Days-Prepaid-Plans-Compared.webp')} />
                </ScrollView>
            </View>

        )
    }
}
