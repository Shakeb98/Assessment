import { Text, ScrollView, View,Image } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class recommended extends Component {
    render() {
        return (
            <View style={styles.recommended}>
                <View style={styles.dottedLine}>
                    <Text style={styles.recommendedText}>recommended for you</Text>
                    <Text>- - ---</Text>
                </View>
                <Text style={styles.explore}>explore more from airtel</Text>
                <View style={styles.firstHorizontalView}>
                    <ScrollView horizontal={true}>
                        <Image resizeMode={'contain'} style={styles.imageRecommended} source={require('../Icon/Airtel-Rs.-6000-cashback-offer.jpg')} />
                        <Image resizeMode={'contain'} style={styles.imageRecommended} source={require('../Icon/Airtel-Rs.-6000-cashback-offer.jpg')} />
                        <Image resizeMode={'contain'} style={styles.imageRecommended} source={require('../Icon/Airtel-Rs.-6000-cashback-offer.jpg')} />
                    </ScrollView>
                </View>
            </View>
        )
    }
}
