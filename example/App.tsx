import React, { Fragment } from "react";
import { SafeAreaView, View, ScrollView, StatusBar } from "react-native";
import AppleHeader from "react-native-apple-header";
import { AppleCard, AppOfTheDayCard } from "react-native-apple-card-views";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <ScrollView
          style={{
            marginTop: 16,
          }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ marginBottom: 32 }}>
            <AppleCard
              footnoteText=""
              source={require("./assets/hero_bg_brawlstars_.jpg")}
              onPress={() => {}}
              resizeMode="cover"
            />
          </View>
          <AppOfTheDayCard
            iconSource={require("./assets/Colorfy.jpg")}
            backgroundSource={require("./assets/ColorfyBG.jpg")}
            onPress={() => {}}
            buttonOnPress={() => {}}
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
