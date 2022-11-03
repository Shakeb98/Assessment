import { Text, StyleSheet, View, Touchable, AsyncStorage } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

function HomePage({ navigation }) {
    checkFunction = async () => {
        value = await AsyncStorage.getItem('userInfomation');
        if(value) {
            navigation.navigate('DataFile')
        }
        else {
            navigation.navigate('SignUp')
        }
    }
    return (
        <View style={styles.homePage}>
            <TouchableOpacity style={styles.loginScreen}
                onPress={checkFunction}>
                <Text style={styles.loginText}>Login Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    loginScreen:{
        height:50,
        width:200,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    loginText:{
        color:'black',
        fontWeight:'bold',
        fontSize:25
    },
    homePage:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomePage