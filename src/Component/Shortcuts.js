import { Text, StyleSheet, View, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native'
import React, { Component } from 'react'

export default class Shortcuts extends Component {
    

    render() {
        return (
            <View style={styles.shortcut}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <View style={styles.lineOne}>
                            <TouchableOpacity style={styles.container}>
                                <Image style={styles.image} source={{ uri: item.image }} />
                            </TouchableOpacity>
                            <Text>{item.text}</Text>
                        </View>
                    }
                    ItemSeparatorComponent={this.ItemSeparator}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        margin: 10,
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    image: {
        height: '100%',
        borderRadius: 4,
    },
    shortcut: {
        padding: 20,
        backgroundColor: 'white',
        height: '30%',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        top: 18
    }
})