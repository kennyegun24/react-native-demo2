import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { darkLightMode } from '../redux/searchSlice';

export default function Options({ text, navigation }) {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const isHomeScreen = navigation?.canGoBack()
    const { darkLight } = useSelector((state) => state.search)

    return (
        <View style={[styles.container, { backgroundColor: darkLight ? '#fff' : '#111' }]}>
            {isHomeScreen && <Ionicons name="ios-arrow-back-sharp" onPress={() => navigation.goBack()} size={30} color={darkLight ? '#111' : '#fff'} />}
            <Text style={[styles.text, { color: darkLight ? '#111' : '#fff' }]}>{text}</Text>
            {!darkLight && < FontAwesome onPress={() => dispatch(darkLightMode(true))} name="toggle-on" size={24} color="#fff" />}
            {darkLight && <FontAwesome onPress={() => dispatch(darkLightMode(false))} name="toggle-off" size={24} color="#111" />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        // // gap: 15,
        justifyContent: 'space-between',
        // flex: 1,
        height: 60,
        width: '100%'
    },
    text: {
        fontSize: 30,
        fontWeight: 700
        // borderBottomWidth: 2,
        // borderBottomColor: '#fff',
    }
})