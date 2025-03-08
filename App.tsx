import React from 'react';
import DateHead from './components/DateHead/ui';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
