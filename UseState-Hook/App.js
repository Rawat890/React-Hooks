import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClassCounter from '../UseState-Hook/class vs hooks/ClassCounter';
import Counter from './class vs hooks/Counter';
import CountPrev from './class vs hooks/CountPrev';

export default function App() {
  return (
    <View style={styles.container}>
      <CountPrev />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
