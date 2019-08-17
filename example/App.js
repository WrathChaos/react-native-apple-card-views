import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppleCard from './lib/src/components/AppleCard/AppleCard';
import AppOfTheDayCard from './lib/src/components/AppOfTheDayCard/AppOfTheDayCard';
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
