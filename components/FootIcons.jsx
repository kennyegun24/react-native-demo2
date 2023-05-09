import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function FootIcons({ navigation }) {
    const openNotes = () => {
        navigation.navigate('AddNote')
    }
    return (
        <View style={{ margin: 'auto', alignItems: 'center' }}>
            <TouchableNativeFeedback style={styles.shadow} onPress={() => openNotes()} >
                <AntDesign style={styles.blue} name="plus" size={24} color="white" />
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'blue',
        borderRadius: 50,
        shadowColor: "blue",
        elevation: 15,
    }, blue: {
        padding: 15,
        backgroundColor: '#545ff5',
        borderRadius: 50,
        shadowColor: "blue",
        elevation: 20
    }
})