import { Text, StyleSheet, View, AsyncStorage, Alert, BackHandler } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import SignUp from './SignUp';

export default class DataFile extends Component {
    state = {
        value: {}
    }

    logout =  async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('SignUp')
    }

    readData = async () => {
        value = await AsyncStorage.getItem('userInfomation');
        this.setState({ value: JSON.parse(value) })
    };

    render() {
        return (
            <View>
                <View style={styles.showData}>
                {this.state.value?.name && <Text>{this.state.value.name}</Text>}
                {this.state.value?.email &&  <Text>{this.state.value.email}</Text>}
                {this.state.value?.phone &&  <Text>{this.state.value.phone}</Text>}
                {this.state.value?.password &&  <Text>{this.state.value.password}</Text>}
                {this.state.value?.confirm &&  <Text>{this.state.value.confirm}</Text>}
                </View>
                <TouchableOpacity style={styles.getButton} onPress={this.readData}>
                    <Text style={styles.getText}>Get Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logOutButton} onPress={this.logout}  >
                    <Text style={styles.logOutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    getButton: {
        backgroundColor: 'gray',
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    getText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    showData: {
        height: 90,
        width: 300,
        borderWidth: 1,
        alignSelf: 'center',
    },
    logOutButton: {
        height: 60,
        backgroundColor: 'black',
        width: 100,
        alignSelf: 'center',
        top: 30,
        justifyContent: 'center'
    },
    logOutText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30
    }
})