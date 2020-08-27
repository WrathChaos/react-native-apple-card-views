import * as React from "react";
import { Text, View, ImageBackground } from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import styles, { _shadowStyle } from "./AppleCard.style";

interface IProps {
  style?: any;
  source: any;
  smallTitle?: string;
  largeTitle?: string;
  shadowColor?: string;
  footnoteText?: string;
  footnoteTextStyle?: any;
  smallTitleTextStyle?: any;
  largeTitleTextStyle?: any;
  onPress: () => void;
}

const AppleCard = (props: IProps) => {
  const {
    source,
    style,
    shadowColor,
    footnoteText,
    footnoteTextStyle,
    smallTitle,
    largeTitle,
    smallTitleTextStyle,
    largeTitleTextStyle,
    onPress,
  } = props;
  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <Ripple
        rippleColor="white"
        rippleDuration={1000}
        rippleContainerBorderRadius={8}
        style={[style]}
        onPress={onPress}
      >
        <ImageBackground
          {...props}
          source={source}
          style={styles.backgroundStyle}
          resizeMode="cover"
          borderRadius={8}
        >
          <View style={styles.topHeaderContainer}>
            <Text style={[styles.smallTitleTextStyle, smallTitleTextStyle]}>
              {smallTitle}
            </Text>
            <Text style={[styles.largeTitleTextStyle, largeTitleTextStyle]}>
              {largeTitle}
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={[styles.footnoteTextStyle, footnoteTextStyle]}>
              {footnoteText}
            </Text>
          </View>
        </ImageBackground>
      </Ripple>
    </Androw>
  );
};

AppleCard.defaultProps = {
  shadowColor: "#000",
  smallTitle: "NEW GAME",
  largeTitle: "The Brilliance of Brawl Stars",
  footnoteText:
    "The next game from the markers of Clash Royale is here. Tap to learn more.",
};

export default AppleCard;
