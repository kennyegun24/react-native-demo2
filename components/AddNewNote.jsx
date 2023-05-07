import { Button, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function AddNewNote({ navigation }) {
    const { darkLight } = useSelector((state) => state.search)

    const [text, setText] = useState('')

    const saveData = async () => {
        // event.persist();
        const currentDateTime = new Date();
        const day = currentDateTime.getDate()
        const month = currentDateTime.getMonth()
        const year = currentDateTime.getFullYear()
        const sec = currentDateTime.getSeconds()
        const min = currentDateTime.getMinutes()
        const hour = currentDateTime.getHours()

        const data = {
            key: Math.floor(Math.random() * (97989889 - 98 + 1) + 98),
            text: text,
            date: `${day}/${month + 1}/${year}, ${hour}:${min}:${sec}`,
        }
        if (text !== '') {
            try {
                const storedData = await AsyncStorage.getItem('@storage_Key');
                let existingData = storedData ? JSON.parse(storedData) : [];
                existingData.push(data);
                await AsyncStorage.setItem('@storage_Key', JSON.stringify(existingData));
                showMessage({
                    message: 'Note Added',
                    description: 'Message',

                    type: 'success', // or 'error', 'warning', 'info'
                });
                setTimeout(() => {
                    navigation.goBack()
                }, 1500);
            } catch (error) {
                console.log('Error saving data: ', error);
            }
        } else {
            showMessage({
                message: 'Note cant be empty',
                description: 'Empty note',

                type: 'warning', // or 'error', 'warning', 'info'
            });
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: darkLight ? '#fff' : '#111' }]}>
            <FlashMessage position="top" />
            <TextInput
                placeholder='Add Notes'
                style={[styles.textArea, { color: darkLight ? '#111' : '#fff' }]}
                multiline
                onChangeText={setText}
                placeholderTextColor={'grey'}
            />

            <View style={{ margin: 'auto', alignItems: 'flex-end', backgroundColor: darkLight ? '#fff' : '#111' }}>
                <TouchableOpacity onPress={saveData} style={styles.touchable}>
                    <Ionicons name="save-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        justifyContent: 'center',
    },
    textArea: {
        paddingHorizontal: 8,
        fontSize: 18,
        textAlignVertical: 'top',
        flex: 1
    },
    touchable: {
        padding: 20,
        backgroundColor: '#545ff5',
        borderRadius: 50
    },
})