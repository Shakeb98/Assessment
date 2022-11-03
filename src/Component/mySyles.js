import { Text, StyleSheet, View } from 'react-native'

const myStyles = StyleSheet.create({
    startedText: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 60
    },
    createText: {
        alignSelf: 'center',
        color: 'gray'
    },
    inputText: {
        width: '92%',
        height: 60,
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius:10,
        alignSelf: 'center',
        textAlignVertical: 'center',
    },
    button:{
        height:50,
        width:120,
        alignSelf:'center',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    buttonText:{
        color:'white',
        fontSize:20
    }

})

export default myStyles