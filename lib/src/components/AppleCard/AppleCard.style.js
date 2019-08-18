import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export function _shadowStyle(shadowColor) {
  return {
    shadowColor,
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 9
    }
  };
}

export default {
  backgroundStyle: {
    borderRadius: 8,
    width: width * 0.9,
    height: height * 0.5
  },
  topHeaderContainer: {
    margin: 16,
    width: width * 0.7
  },
  smallTitleStyle: {
    fontSize: 16,
    opacity: 0.8,
    color: "#ebe8f9",
    fontWeight: "700",
    fontFamily: "System"
  },
  largeTitleStyle: {
    fontSize: 32,
    opacity: 0.9,
    color: "#fffdfe",
    fontWeight: "bold",
    fontFamily: "System"
  },
  bottomContainer: {
    left: 16,
    bottom: 16,
    width: "90%",
    position: "absolute"
  },
  footnoteStyle: {
    fontSize: 12,
    color: "#fffdfe",
    fontFamily: "System"
  }
};
