import { ViewStyle, TextStyle, Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

interface Style {
  bottomContainer: ViewStyle;
  backgroundStyle: ViewStyle;
  footnoteTextStyle: TextStyle;
  topHeaderContainer: ViewStyle;
  smallTitleTextStyle: TextStyle;
  largeTitleTextStyle: TextStyle;
}

export function _shadowStyle(shadowColor) {
  return {
    shadowColor,
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 9,
    },
  };
}

export default StyleSheet.create<Style>({
  backgroundStyle: {
    borderRadius: 8,
    width: ScreenWidth * 0.9,
    height: ScreenHeight * 0.5,
  },
  topHeaderContainer: {
    margin: 16,
    width: ScreenWidth * 0.7,
  },
  smallTitleTextStyle: {
    fontSize: 16,
    opacity: 0.8,
    color: "#ebe8f9",
    fontWeight: "700",
    fontFamily: "System",
  },
  largeTitleTextStyle: {
    fontSize: 32,
    opacity: 0.9,
    color: "#fffdfe",
    fontWeight: "bold",
    fontFamily: "System",
  },
  bottomContainer: {
    left: 16,
    bottom: 16,
    width: "90%",
    position: "absolute",
  },
  footnoteTextStyle: {
    fontSize: 12,
    color: "#fffdfe",
    fontFamily: "System",
  },
});
