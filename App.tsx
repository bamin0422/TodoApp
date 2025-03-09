import React from 'react';
import AppProvider from './src/app/AppProvider';
import Home from './src/pages/Home';

const App = (): React.JSX.Element => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
