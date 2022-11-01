import { Text, StyleSheet, View ,TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import styles from './styles'

export default class BalanceDetail extends Component {
    render() {
        return (
            <View style={styles.travelWorld}>
                <View style={styles.lineThree}>
                    <View style={styles.prepaid}>
                        <Text style={styles.prepaidText}>PREPAID</Text>
                        <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
                    </View>

                    <Text style={styles.services}>5 Services</Text>
                    <TouchableOpacity style={styles.viewDetail}>
                        <Text style={styles.viewDetailText}>VIEW DETAILS</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lineThreeSecond}>
                    <View style={styles.money}>
                        <Text style={styles.prepaidText}>MONEY</Text>
                        <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
                    </View>
                    <View style={styles.tapdetails}>
                        <Text style={styles.services}>₹.......</Text>
                        <Text style={styles.prepaidText}>in your wallet</Text>
                    </View>
                    <TouchableOpacity style={styles.showbalanceDetail}>
                        <Text style={styles.showbalanceDetailText}>SHOW BALANCE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
