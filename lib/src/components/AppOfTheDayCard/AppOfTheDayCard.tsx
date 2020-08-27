import * as React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import LinearGradient from "react-native-linear-gradient";
import styles, { _shadowStyle } from "./AppOfTheDayCard.style";

interface IProps {
  title?: string;
  iconStyle?: any;
  iconSource: any;
  subtitle?: string;
  largeTitle?: string;
  buttonText?: string;
  titleTextStyle?: any;
  shadowColor?: string;
  backgroundSource: any;
  subtitleTextStyle?: any;
  buttonSubtitle?: string;
  largeTitleTextStyle?: any;
  buttonSubtitleTextStyle?: any;
  buttonOnPress: () => void;
  onPress: () => void;
}

const AppOfTheDayCard = (props: IProps) => {
  const {
    title,
    onPress,
    subtitle,
    iconStyle,
    largeTitle,
    buttonText,
    iconSource,
    shadowColor,
    buttonOnPress,
    titleTextStyle,
    buttonSubtitle,
    backgroundSource,
    subtitleTextStyle,
    largeTitleTextStyle,
    buttonSubtitleTextStyle,
  } = props;
  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <Ripple
        {...props}
        rippleColor="white"
        rippleDuration={1000}
        rippleContainerBorderRadius={8}
        style={styles.container}
        onPress={onPress}
      >
        <ImageBackground
          borderRadius={8}
          resizeMode="cover"
          style={styles.container}
          source={backgroundSource}
          {...props}
        >
          <View style={styles.innerContainer}>
            <Text style={[styles.largeTitleTextStyle, largeTitleTextStyle]}>
              {largeTitle}
            </Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#de9c7c", "#ef9f81", "#efa192"]}
              style={styles.gradientStyle}
              {...props}
            >
              <View style={styles.gradientInnerContainer}>
                <Image
                  style={[styles.iconStyle, iconStyle]}
                  borderRadius={12}
                  resizeMode="cover"
                  source={iconSource}
                />
                <View style={styles.titleContainer}>
                  <Text
                    numberOfLines={2}
                    style={[styles.titleTextStyle, titleTextStyle]}
                  >
                    {title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.subtitleTextStyle, subtitleTextStyle]}
                  >
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
                  <Text
                    style={[
                      styles.buttonSubtitleTextStyle,
                      buttonSubtitleTextStyle,
                    ]}
                  >
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

AppOfTheDayCard.defaultProps = {
  shadowColor: "#000",
  title: "Colorfy: Coloring Art Games",
  subtitle: "Drawing & painting for  everyone",
  largeTitle: `APP` + "\n" + `OF THE` + "\n" + `DAY`,
  buttonText: "GET",
  buttonSubtitle: "In-App Purchases",
};

export default AppOfTheDayCard;
