import React from 'react';
import DateHead from './src/components/DateHead/ui';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Empty from './src/components/Empty/ui';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import AddTodo from './src/components/AddTodo/ui';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: 'height'})}
          style={styles.avoid}>
          <DateHead />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
