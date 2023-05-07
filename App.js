import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Body from './pages/Body';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigator from './routes/HomeStack'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20
    // backgroundColor: '#fff',
  },
});
