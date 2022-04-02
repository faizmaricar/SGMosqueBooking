import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'https://ourmosques.commonspaces.sg'}}
    />
  );
};

export default App;
