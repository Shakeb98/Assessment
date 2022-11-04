import { Text, SafeAreaView, TouchableOpacity, FlatList, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class ToDoList extends Component {
    state = {
        todoListData: '',
        todoList: []
    }

    //  setState is used for rendering
    addData = () => {
        this.state.todoList.push(this.state.todoListData)
        this.setState({ todoList: this.state.todoList, todoListData: '' })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, top: 10, alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 300, borderWidth: 2, backgroundColor: 'aqua', padding: 10 }}
                    onChangeText={(text) => this.setState({ todoListData: text })}
                    value={this.state.todoListData}
                />
                <TouchableOpacity style={{ height: 20, width: 50, backgroundColor: 'black', top: 20, }}
                    onPress={this.addData}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Add</Text>
                </TouchableOpacity>

                <FlatList
                    style={{ zIndex: -1 }}
                    data={this.state.todoList}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 50, width: 300, borderWidth: 2, backgroundColor: 'aqua', padding: 10, top: 30 }}>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        )
    }
}