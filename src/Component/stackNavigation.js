import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import DataFile from './DataFile';
import HomePage from './HomePage';

const Stack = createNativeStackNavigator();

export default class stackNavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomPage" component={HomePage} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="DataFile" component={DataFile} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
