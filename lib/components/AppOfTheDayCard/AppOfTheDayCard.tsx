import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageBackground,
} from "react-native";
import Androw from "react-native-androw";
import LinearGradient from "react-native-linear-gradient";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./AppOfTheDayCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<ViewStyle>>;

interface IAppOfTheDayCardProps {
  style?: CustomStyleProp;
  iconStyle?: CustomImageStyleProp;
  shadowStyle?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  subtitleTextStyle?: CustomTextStyleProp;
  largeTitleTextStyle?: CustomTextStyleProp;
  buttonSubtitleTextStyle?: CustomTextStyleProp;
  gradientColors?: string[];
  title: string;
  iconSource: any;
  subtitle?: string;
  largeTitle?: string;
  buttonText?: string;
  shadowColor?: string;
  backgroundSource: any;
  buttonSubtitle?: string;
  buttonOnPress: () => void;
  onPress: () => void;
}

const AppOfTheDayCard: React.FC<IAppOfTheDayCardProps> = ({
  style,
  iconStyle,
  iconSource,
  shadowStyle,
  backgroundSource,
  titleTextStyle,
  subtitleTextStyle,
  largeTitleTextStyle,
  buttonSubtitleTextStyle,
  buttonOnPress,
  onPress,
  buttonText = "GET",
  buttonSubtitle = "In-App Purchases",
  title = "Colorfy: Coloring Art Games",
  subtitle = "Drawing & painting for  everyone",
  largeTitle = `APP` + "\n" + `OF THE` + "\n" + `DAY`,
  gradientColors = ["#de9c7c", "#ef9f81", "#efa192"],
  ...rest
}) => {
  const renderLargeTitle = () => (
    <Text style={[styles.largeTitleTextStyle, largeTitleTextStyle]}>
      {largeTitle}
    </Text>
  );

  const renderIcon = () => (
    <Image
      borderRadius={12}
      resizeMode="cover"
      source={iconSource}
      style={[styles.iconStyle, iconStyle]}
    />
  );

  const renderTitleContainer = () => (
    <View style={styles.titleContainer}>
      <Text numberOfLines={2} style={[styles.titleTextStyle, titleTextStyle]}>
        {title}
      </Text>
      <Text
        numberOfLines={1}
        style={[styles.subtitleTextStyle, subtitleTextStyle]}
      >
        {subtitle}
      </Text>
    </View>
  );

  const renderButtonContainer = () => (
    <View style={styles.buttonContainer}>
      <RNBounceable style={styles.buttonInnerContainer} onPress={buttonOnPress}>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </RNBounceable>
      <Text style={[styles.buttonSubtitleTextStyle, buttonSubtitleTextStyle]}>
        {buttonSubtitle}
      </Text>
    </View>
  );

  const renderLinearGradientContainer = () => (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={gradientColors}
      style={styles.gradientStyle}
      {...rest}
    >
      <View style={styles.gradientInnerContainer}>
        {renderIcon()}
        {renderTitleContainer()}
        {renderButtonContainer()}
      </View>
    </LinearGradient>
  );

  return (
    <Androw style={[styles.shadowStyle, shadowStyle]}>
      <RNBounceable
        bounceEffect={0.95}
        bounceFriction={4}
        {...rest}
        style={[styles.container, style]}
        onPress={onPress}
      >
        <ImageBackground
          borderRadius={8}
          resizeMode="cover"
          {...rest}
          style={[styles.container, style]}
          source={backgroundSource}
        >
          <View style={styles.innerContainer}>
            {renderLargeTitle()}
            {renderLinearGradientContainer()}
          </View>
        </ImageBackground>
      </RNBounceable>
    </Androw>
  );
};

export default AppOfTheDayCard;
