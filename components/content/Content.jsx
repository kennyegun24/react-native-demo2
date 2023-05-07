import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import React, { useState, useCallback } from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

export default function Content({ navigation }) {
  const { searchText, darkLight } = useSelector((state) => state.search)
  const [notes, setNotes] = useState([])

  const collectData = async () => {
    const storedData = await AsyncStorage.getItem('@storage_Key');
    const parsedData = JSON.parse(storedData)
    setNotes(parsedData)
  }

  useFocusEffect(
    useCallback(() => {
      collectData();
    }, [])
  );

  const renderItem = ({ item, i }) => {
    const itemStyle = i % 4 === 0 ? styles.fourItem : i % 2 === 0 ? styles.twoItem : i % 3 === 0 ? styles.threeItem : styles.oddItem;
    const textStyle = i % 4 === 0 ? styles.whiteText : i % 2 === 0 ? styles.blackTxt : i % 3 === 0 ? styles.whiteText : styles.blackTxt
    return (
      <TouchableNativeFeedback onPress={() => navigation.navigate('NoteDetails', item)}>
        <View style={[styles.smallDiv, itemStyle]}>
          <Text style={[{ color: '#fff' }, textStyle]}>{item.text.substring(0, 250)}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', borderTopColor: '#111', borderTopWidth: 2, height: '10%' }}>
            <Text style={[{ color: '#fff' }, textStyle]}>Date</Text>
            <Text style={[{ color: '#fff' }, textStyle]}>{item.date}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  };

  const filteredNotes = notes.length >= 0 && notes?.filter((item) => item.text.includes(searchText.toLowerCase()))

  return (
    <View style={styles.container}>
      {
        filteredNotes.length > 0 ?
          (
            <MasonryList
              data={filteredNotes}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              onEndReachedThreshold={0.1}
              onRefresh={() => refetch({ first: ITEM_CNT })}
              contentContainerStyle={{ paddingHorizontal: 5 }}
            />
          ) :
          (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Text style={{ color: darkLight ? '#111' : '#fff', fontSize: 24, opacity: 0.5 }}>No note found 😪</Text>
            </View>
          )
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  smallDiv: {
    borderWidth: 2,
    borderColor: '#111',
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 25,
    marginRight: 5,
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 7
  },
  twoItem: {
    height: 200,
    backgroundColor: '#fff',
  },
  threeItem: {
    height: 220,
    backgroundColor: 'red',
    marginLeft: 5
  },
  oddItem: {
    backgroundColor: '#CCCCCC',
    height: 240,
    marginLeft: 5
  },
  fourItem: {
    backgroundColor: 'purple',
    height: 260,
  }, blackTxt: {
    color: '#111'
  },
  whiteText: {
    color: '#fff'
  }
})