import React from "react";
import PropTypes from "prop-types";
import { Text, View, ImageBackground } from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import styles, { _shadowStyle } from "./AppleCard.style";

const AppleCard = props => {
  const {
    style,
    source,
    shadowColor,
    footnoteText,
    footnoteStyle,
    smallTitleStyle,
    largeTitleStyle,
    onPress
  } = props;
  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <Ripple
        rippleColor="white"
        rippleDuration={1000}
        rippleContainerBorderRadius={8}
        style={styles.container}
        onPress={onPress}
      >
        <ImageBackground
          style={style || styles.backgroundStyle}
          source={source}
          resizeMode="cover"
          borderRadius={8}
          {...props}
        >
          <View style={styles.topHeaderContainer}>
            <Text style={smallTitleStyle}>{smallTitle}</Text>
            <Text style={largeTitleStyle}>{largeTitle}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={footnoteStyle}>{footnoteText}</Text>
          </View>
        </ImageBackground>
      </Ripple>
    </Androw>
  );
};

AppleCard.propTypes = {
  shadowColor: PropTypes.string,
  smallTitle: PropTypes.string,
  largeTitle: PropTypes.string
};

AppleCard.defaultProps = {
  shadowColor: "#000",
  smallTitle: "NEW GAME",
  largeTitle: "The Brilliance of Brawl Stars",
  smallTitleStyle: styles.smallTitleStyle,
  largeTitleStyle: styles.largeTitleStyle,
  footnoteStyle: styles.footnoteStyle,
  footnoteText:
    "The next game from the markers of Clash Royale is here. Tap to learn more.",
  source: require("../../../../assets/temp/hero_bg_brawlstars_.jpg")
};

export default AppleCard;
