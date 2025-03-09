import React from 'react';
import DateHead from './src/components/DateHead/ui';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Empty from './src/components/Empty/ui';
import {StyleSheet} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead />
        <Empty />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
