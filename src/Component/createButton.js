import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import myStyles from './mySyles'

export default class createButton extends Component {
    render() {
        return (
            <TouchableOpacity style={myStyles.button} onPress={this.props.onPress}>
                <Text style={myStyles.buttonText}>Create</Text>
            </TouchableOpacity>
        )
    }
}
