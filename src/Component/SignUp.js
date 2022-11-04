import { Text, StyleSheet, View, AsyncStorage } from 'react-native'
import React, { Component } from 'react'
import Header from './Header'
import InputText from './InputText'
import CreateButton from './createButton'
import DataFile from './DataFile'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassWord: ''
        }
    }

    storeData = async () => {
        let finalOutput = this.state;
        AsyncStorage.setItem('userInfomation', JSON.stringify(finalOutput))
    };

    stateChange = (val, key) => {
        this.setState({
            [key]: val,
        })
    }

    render() {
        return (
            <View style={styles.backgroundImage}>
                <View style={styles.completeScreen}>
                    <Header />
                    <View style={styles.InputTextAll}>
                        <InputText value={this.state} placeholder="Name" type={'name'} stateChange={this.stateChange} />
                        <InputText placeholder="Email" type={'email'} stateChange={this.stateChange} />
                        <InputText placeholder="Phone" type={'phone'} stateChange={this.stateChange} />
                        <InputText placeholder="Password" type={'password'} stateChange={this.stateChange} />
                        <InputText placeholder="Confirm Password" type={'confirm'} stateChange={this.stateChange} />
                    </View>
                    <CreateButton onPress={() => {
                        this.storeData();
                        this.props.navigation.navigate(DataFile);
                    }} />
                    <View style={styles.lastText}>
                        <Text>Already have an account ?</Text>
                        <Text style={styles.Login}> Login here</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    completeScreen: {
        height: 800,
        width: 370,
        backgroundColor: 'white',
        borderRadius: 20
    },
    InputTextAll: {
        height: '64%',
        justifyContent: 'space-around'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gainsboro'
    },
    lastText: {
        height: 100,
        width: 300,
        flexDirection: 'row',
        justifyContent: "center",
        alignSelf: 'center',
        alignItems: 'center'
    },
    Login: {
        color: 'blue'
    }
})