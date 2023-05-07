import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { collectSendText } from '../redux/searchSlice';

export default function Search() {
    const dispatch = useDispatch()

    const handleSearch = (text) => {
        dispatch(collectSendText(text))
    }

    return (
        <View style={styles.container}>
            <FontAwesome
                name="search"
                size={20}
                color="green"
                style={styles.searchIcon} />
            <TextInput
                type="search"
                onChangeText={handleSearch}
                style={styles.input}
                placeholder='Search your notes'
                placeholderTextColor={'#fff'} />
            <Ionicons name="ellipsis-vertical-sharp"
                size={24}
                style={styles.elipssi}
                color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    searchIcon: {
        position: 'absolute',
        left: 5,
        zIndex: 1
    },
    elipssi: {
        position: 'absolute',
        right: 5,
        zIndex: 1
    }
    ,
    input: {
        flex: 1,
        padding: 8,
        color: '#fff',
        backgroundColor: '#363434',
        borderRadius: 25,
        borderColor: '#999999',
        paddingHorizontal: 30,
        borderWidth: 1,
    }
})