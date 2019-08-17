import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {AppleCard, AppOfTheDayCard} from './lib/src/index';
import {AppleHeader} from '@freakycoder/react-native-header-view';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppleHeader />
        <View
          style={{
            marginTop: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <AppleCard /> */}
          <AppOfTheDayCard />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
