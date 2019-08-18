import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import LinearGradient from "react-native-linear-gradient";
import styles, { _shadowStyle } from "./AppOfTheDayCard.style";

const AppOfTheDayCard = props => {
  const {
    shadowColor,
    backgroundSource,
    iconSource,
    largeTitle,
    largeTitleStyle,
    iconStyle,
    title,
    subtitle,
    buttonText,
    buttonSubtitle,
    buttonOnPress
  } = props;
  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <Ripple
        rippleColor="white"
        rippleDuration={1000}
        rippleContainerBorderRadius={8}
        style={styles.container}
      >
        <ImageBackground
          borderRadius={8}
          resizeMode="cover"
          style={styles.container}
          source={backgroundSource}
          {...props}
        >
          <View style={styles.innerContainer}>
            <Text style={largeTitleStyle}>{largeTitle}</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#de9c7c", "#ef9f81", "#efa192"]}
              style={styles.gradientStyle}
              {...props}
            >
              <View style={styles.gradientInnerContainer}>
                <Image
                  style={iconStyle}
                  borderRadius={12}
                  resizeMode="cover"
                  source={iconSource}
                />
                <View style={styles.titleContainer}>
                  <Text numberOfLines={2} style={styles.titleStyle}>
                    {title}
                  </Text>
                  <Text numberOfLines={1} style={styles.subtitleStyle}>
                    {subtitle}
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonInnerContainer}
                    onPress={buttonOnPress}
                  >
                    <Text style={styles.buttonTextStyle}>{buttonText}</Text>
                  </TouchableOpacity>
                  <Text style={styles.buttonSubtitleStyle}>
                    {buttonSubtitle}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </Ripple>
    </Androw>
  );
};

AppOfTheDayCard.propTypes = {
  shadowColor: PropTypes.string,
  largeTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string
};

AppOfTheDayCard.defaultProps = {
  shadowColor: "#000",
  iconStyle: styles.iconStyle,
  title: "Colorfy: Coloring Art Games",
  subtitle: "Drawing & painting for  everyone",
  largeTitleStyle: styles.largeTitleStyle,
  largeTitle: `APP` + "\n" + `OF THE` + "\n" + `DAY`,
  buttonText: "GET",
  buttonSubtitle: "In-App Purchases",
  iconSource: require("../../../../assets/temp/Colorfy.jpg"),
  backgroundSource: require("../../../../assets/temp/ColorfyBG.jpg")
};

export default AppOfTheDayCard;
