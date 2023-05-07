import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Content from '../components/content/Content'

export default function Notes({ navigation }) {
    return (
        <View>
            <Content navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({})