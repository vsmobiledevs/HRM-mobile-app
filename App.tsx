import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import MainStack from './src/navigations/stack';
import {SafeAreaView, KeyboardAvoidingView, StatusBar} from 'react-native';
import {colors} from './src/utilities/exporter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor={colors.g1} barStyle="dark-content" />
            <MainStack />
          </SafeAreaView>
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;
