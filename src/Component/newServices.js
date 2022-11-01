import { Text, View, Image, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Data from '../utils/dummyData';

export default class newServices extends Component {
    render() {
        return (
            <View style={styles.newServices}>
                <Text style={styles.shortcutText}>BUY NEW SERVICES</Text>
                <FlatList
                    data={Data}
                    numColumns={4}
                    scrollEnabled={false}
                    renderItem={({ item }) => {
                        return (<View style={styles.wholeFlatList}>
                            <View style={styles.backgrd}>
                                <Image style={styles.flatListImages} source={item.image} />
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={styles.textImage}>{item.text}</Text>
                            </View>
                        </View>)
                    }
                    }
                />
            </View>
        )
    }
}
