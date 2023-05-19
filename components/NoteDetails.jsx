import { StyleSheet, TextInput, Text, Dimensions, TouchableNativeFeedback, SafeAreaView, ScrollView, Button, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

export default function NoteDetails({ route, navigation }) {
    const { darkLight } = useSelector((state) => state.search)

    const item = route.params
    const [text, setText] = useState(item.text)
    const [edit, setEdit] = useState(false)
    console.log(item.key)
    console.log(text)
    const getNote = async () => {
        try {

            const getFromLocal = await AsyncStorage.getItem('@kennysNotesApp')
            const filterItem = JSON.parse(getFromLocal)

            return filterItem

        } catch (error) {
            console.log(error)
        }
    }

    const updateArray = async () => {
        const array = await getNote()
        const getParticularArray = array.findIndex((key) => key.key === item.key)

        if (getParticularArray !== -1) {
            array[getParticularArray].text = text
        }
        console.log(getParticularArray)
        try {
            await AsyncStorage.setItem('@kennysNotesApp', JSON.stringify(array));
            showMessage({
                message: 'Note Updated',
                description: 'Message',

                type: 'success', // or 'error', 'warning', 'info'
            });
            setTimeout(() => {
                navigation.goBack()
            }, 1500);
        } catch (error) {
            showMessage({
                message: 'Could not update note!',
                description: 'Message',

                type: 'error'
            });
        }
    }

    const deleteArray = async () => {
        const array = await getNote()
        const getParticularArray = array.filter((key) => key.key !== item.key)
        try {
            await AsyncStorage.setItem('@kennysNotesApp', JSON.stringify(getParticularArray));
            showMessage({
                message: 'Deleted',
                description: 'Message',

                type: 'success', // or 'error', 'warning', 'info'
            });
            setTimeout(() => {
                navigation.goBack()
            }, 1500);
        } catch (error) {
            showMessage({
                message: 'Could not update note!',
                description: 'Message',

                type: 'error'
            });
        }
    }
    return (
        <View style={styles.container}>
            <FlashMessage position="top" />
            <ScrollView style={[{ flex: 1 }, { backgroundColor: darkLight ? '#fff' : '#111', color: darkLight ? '#111' : '#fff' }]}>
                <TextInput
                    placeholder='Add Notes'
                    style={[styles.textArea, { color: darkLight ? '#111' : '#fff' }]}
                    multiline
                    value={text}
                    onChangeText={setText}
                    placeholderTextColor={'grey'}
                    editable={edit ? true : false}
                />
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: darkLight ? '#fff' : '#111' }}>
                {
                    !edit ?
                        <TouchableOpacity onPress={() => setEdit(true)} style={styles.touchable}>
                            <Feather name="edit" size={24} color="#fff" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => [setEdit(false), updateArray()]}
                            style={styles.touchable}
                        >
                            <Ionicons name="save-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                }
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => deleteArray()}
                >
                    <Ionicons name="trash-bin" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View >
    )
}
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textArea: {
        paddingHorizontal: 8,
        fontSize: 18,
        textAlignVertical: 'top',
        flex: 1,
    },
    touchable: {
        padding: 15,
        backgroundColor: '#545ff5',
        borderRadius: 50
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 700
    }
})