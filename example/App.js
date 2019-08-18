import React, {Fragment} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-view';
import {AppleHeader} from '@freakycoder/react-native-header-views';

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
