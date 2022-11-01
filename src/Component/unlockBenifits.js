import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class unlockBenifits extends Component {
    render() {
        return (
            <View style={styles.unlockBenifits}>
                <Text style={styles.unlockText}>unlock benifits at ₹1,599</Text>
                <View style={styles.benifitImages}>
                    <Image resizeMode={'contain'} style={styles.imagewWfi} source={require('../Icon/375-3757892_black-wifi-logo-transparent-image-free-icon-wifi.png')} />
                    <View>
                        <Text>up to 300</Text>
                        <Text>Mbps wi-fi</Text>
                    </View>
                    <Image resizeMode={'contain'} style={styles.wifiImage} source={require('../Icon/png-clipart-brown-crt-tv-illustration-television-show-icon-tv-television-rectangle.png')} />
                    <View>
                        <Text>350+ Tv</Text>
                        <Text>channels</Text>
                    </View>
                    <Image resizeMode={'contain'} style={styles.wifiImage} source={require('../Icon/download(1).jpeg')} />
                    <View>
                        <Text>17 OTT</Text>
                        <Text>apps</Text>
                    </View>
                    <Image resizeMode={'contain'} style={styles.imagegreaterthan} source={require('../Icon/more-than.png')} />
                </View>
                <Text style={styles.hardwareText}>get  hardware & installation at ₹0</Text>
            </View>
        )
    }
}

