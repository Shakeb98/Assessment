import { Text, StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class travelOtt extends Component {
    render() {
        return (
            <View style={styles.travelWorld}>
                <View style={styles.lineThree}>
                    <View style={styles.bagArrow}>
                        <Image resizeMode={'contain'} style={styles.bagImage} source={require('../Icon/images(7).png')} />
                        <Image style={styles.greaterthan} source={require('../Icon/more-than.png')} />
                    </View>
                    <View style={styles.travel}>
                        <Text style={styles.travelText}>travel the world</Text>
                        <Text style={styles.travelText}>with airtel</Text>
                    </View>
                    <View style={styles.roaming}>
                        <Text>exploring international</Text>
                        <Text>roaming packs</Text>
                    </View>
                </View>

                <View style={styles.lineThreeSecond}>
                    <View style={styles.lineThree}>
                        <View style={styles.bagArrow}>
                            <Image resizeMode={'contain'} style={styles.OttImage} source={require('../Icon/top-10-ott-platforms-in-india-1200x675.jpeg')} />
                            <Image style={styles.greaterthan} source={require('../Icon/more-than.png')} />
                        </View>
                        <View style={styles.travel}>
                            <Text style={styles.travelText}>15 OTTs in 1 app</Text>
                        </View>
                        <View style={styles.roaming}>
                            <Text>get Xstream Premium</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}