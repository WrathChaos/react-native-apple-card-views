import React, {Fragment} from 'react';
import {SafeAreaView, View, ScrollView, StatusBar} from 'react-native';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';
import {AppleHeader} from '@freakycoder/react-native-header-view';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppleHeader />
        <ScrollView
          style={{
            marginTop: 12,
          }}
          contentContainerStyle={{
            paddingBottom: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{marginBottom: 32}}>
            <AppleCard />
          </View>
          <AppOfTheDayCard />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
