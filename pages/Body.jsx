import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './Navbar'
import Notes from './Notes'
import Footer from '../pages/Footer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';

export default function Body({ navigation }) {
    const { darkLight } = useSelector((state) => state.search)

    return (
        <SafeAreaView style={{ backgroundColor: darkLight ? '#fff' : '#111', flex: 1 }}>
            <View style={{ height: '12%' }}>
                <Navbar />
            </View>
            <View style={{ height: '76%', marginTop: 30 }}>
                <Notes navigation={navigation} />
            </View>
            <View style={{ height: '7%' }}>
                <Footer navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})