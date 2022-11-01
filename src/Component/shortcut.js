import { Text, StyleSheet, View ,Image,FlatList} from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Data from '../utils/dummyData';

export default class shortcut extends Component {
    render() {
        return (
            <View style={styles.shortcut}>
                <Text style={styles.shortcutText}>SHORTCUTS</Text>
                <FlatList
                    horizontal={false}
                    data={Data}
                    scrollEnabled={false}
                    numColumns={4}
                    renderItem={({ item }) =>
                        <View style={styles.wholeFlatList}>
                            <View style={styles.backgrd}>
                                <Image style={styles.flatListImages} source={item.image} />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textImage}>{item.text}</Text>
                            </View>
                        </View>
                    }
                />
            </View>

        )
    }
}

