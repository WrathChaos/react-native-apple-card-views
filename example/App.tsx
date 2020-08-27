import React, { Fragment } from "react";
import { SafeAreaView, View, ScrollView, StatusBar } from "react-native";
import AppleHeader from "react-native-apple-header";
// import { AppleCard, AppOfTheDayCard } from "react-native-apple-card-views";
import { AppleCard, AppOfTheDayCard } from "./build/dist/index";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        c
        <AppleHeader />
        <ScrollView
          style={{
            marginTop: 12,
          }}
          contentContainerStyle={{
            paddingBottom: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ marginBottom: 32 }}>
            <AppleCard />
          </View>
          <AppOfTheDayCard />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
