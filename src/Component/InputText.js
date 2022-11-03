import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import myStyles from './mySyles'

export default class InputText extends Component {
    render() {

        return (
            <View>
                <TextInput
                 placeholder={this.props.placeholder} 
                 onChangeText={(text) => this.props.stateChange(text, this.props.type)} 
                 style={myStyles.inputText} />
            </View>
        )
    }
}
