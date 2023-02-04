import React from "react";
import { SafeAreaView, View, ScrollView, StatusBar } from "react-native";
import AppleHeader from "react-native-apple-header";
import { AppleCard, AppOfTheDayCard } from "./build/dist/index";

const App = () => {
  return (
    <>
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
              source={require("./assets/hero_bg_brawlstars_.jpg")}
              onPress={() => {}}
              smallTitle={"NEW GAME"}
              largeTitle={"The Brilliance of Brawl Starts"}
              footnote={
                "The next game from the markers of Clash Royale is here. Tap to learn more."
              }
            />
          </View>
          <AppOfTheDayCard
            title={"Colorfy: Coloring Art Games"}
            subtitle={"Drawing & painting for  everyone"}
            largeTitle={"APP" + "\n" + "OF THE" + "\n" + "DAY"}
            buttonText={"GET"}
            iconSource={require("./assets/Colorfy.jpg")}
            backgroundSource={require("./assets/ColorfyBG.jpg")}
            buttonSubtitle={"In-App Purchases"}
            onPress={() => {}}
            onButtonPress={() => {}}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
