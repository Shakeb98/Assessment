import { Text, StyleSheet, View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component, useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const myData = [
    {
        id: 101,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 102,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 103,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 104,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 105,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 106,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 107,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 108,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 109,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 110,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 111,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 112,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 113,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 114,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 115,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 116,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 117,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 118,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 119,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 120,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 121,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 122,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 123,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    }
    ,
    {
        id: 124,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 125,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 126,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 127,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 128,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 129,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 130,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 131,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 132,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 133,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 134,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    }, {
        id: 135,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 136,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 137,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 138,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 139,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    },
    {
        id: 140,
        imageUrl: "https://source.unsplash.com/1600x900/?random"
    }
]


export default FlatListRef = () => {
    const [input, setinput] = useState('');
    const [ref, setRef] = useState(null);
    const [showButton, setButtonValue] = useState(false);

    const visibleButton = () => {
        setButtonValue(true)
    }
    const scrollToTop = () => {
        ref.scrollToIndex({ index: 0 })
    }
    const changeValue = (nativeEvent) => {
        return nativeEvent.contentOffset.y <= 8667
    };


    return (
        <SafeAreaView style={styles.wholeScreen}>
            <View style={styles.header}>
                <TextInput onChangeText={input => setinput(input)} style={styles.inputText}></TextInput>
                <TouchableOpacity style={styles.searchButton} onPress={(inputValue) => {
                    const finalId = myData.findIndex((item) => item.id == input)
                    ref.scrollToIndex({
                        index: finalId,
                        animated: true
                    })
                }}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <View >
                <FlatList
                    ref={(ref) => { setRef(ref) }}
                    data={myData}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View>
                                    <Image style={styles.Image} source={{ uri: item.imageUrl }} />
                                </View>
                                <View>
                                    <Text style={{ alignSelf: 'center', fontSize: 20 }}>{item.id}</Text>
                                </View>
                                <View style={styles.Text}></View>
                            </View>
                        )
                    }}
                    onEndReached={visibleButton}
                    onScroll={({ nativeEvent }) => {
                        if (changeValue(nativeEvent)) {
                            setButtonValue(false)
                        }
                    }}
                />
                {
                    showButton &&
                    <TouchableOpacity style={styles.scrollTopButton} onPress={scrollToTop}>
                        <Text style={styles.scrollUpButtonText}>Scroll To Top</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    inputText:
    {
        width: 200,
        height: 40,
        borderWidth: 1
    },
    searchButton:
    {
        backgroundColor: 'gainsboro',
        width: 80,
        padding: 12
    },
    searchButtonText: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    Image:
    {
        width: 430,
        height: 200
    },
    Text:
    {
        borderWidth: 2,
        marginBottom: 10
    },
    scrollTopButton:
    {
        backgroundColor: 'gainsboro',
        position: 'absolute',
        alignItems: 'center',
        padding: 10,
        alignSelf: 'center',
        bottom: 40,
        borderRadius: 5
    },
    scrollUpButtonText:
    {
        color: 'black'
    }
})