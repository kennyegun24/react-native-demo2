import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FootIcons from '../components/FootIcons'

export default function Footer({ navigation }) {

    return (
        <View style={{ position: 'relative' }}>
            <View style={styles.shadow}>
                <FootIcons navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        position: 'absolute',
        right: 0,
        top: -30,
    },
})