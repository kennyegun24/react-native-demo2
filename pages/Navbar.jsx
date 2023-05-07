import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
// import Options from '../components/Options'

export default function Navbar() {
    return (
        <View style={styles.container}>
            {/* <Options /> */}
            <Search />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: '100%',
        // justifyContent: 'center',
        paddingTop: 15,
        paddingHorizontal: 15,
        // gap: 20
    }
})