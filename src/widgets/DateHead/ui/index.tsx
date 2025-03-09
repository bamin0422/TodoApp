import {StatusBar, StyleSheet, Text, View} from 'react-native';
import useDate from '../models/useDate';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DateHead = () => {
  const {today} = useDate();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{today}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
