import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
/**
 * ? Local Imports
 */
import styles from './AppOfTheDayCard.style';

interface IAppOfTheDayCardProps {
  title: string;
  iconSource: any;
  subtitle: string;
  largeTitle: string;
  buttonText: string;
  buttonSubtitle: string;
  backgroundSource: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  shadowStyle?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  subtitleTextStyle?: StyleProp<TextStyle>;
  largeTitleTextStyle?: StyleProp<TextStyle>;
  buttonSubtitleTextStyle?: StyleProp<TextStyle>;
  gradientColors?: string[];
  onButtonPress: () => void;
  onPress: () => void;
}

const AppOfTheDayCard: React.FC<IAppOfTheDayCardProps> = ({
  style,
  title,
  subtitle,
  largeTitle,
  buttonSubtitle,
  iconStyle,
  iconSource,
  shadowStyle,
  backgroundSource,
  titleTextStyle,
  subtitleTextStyle,
  largeTitleTextStyle,
  buttonSubtitleTextStyle,
  onButtonPress,
  buttonText,
  onPress,
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
        style={[styles.subtitleTextStyle, subtitleTextStyle]}>
        {subtitle}
      </Text>
    </View>
  );

  const renderButtonContainer = () => (
    <View style={styles.buttonContainer}>
      <RNBounceable style={styles.buttonInnerContainer} onPress={onButtonPress}>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </RNBounceable>
      <Text style={[styles.buttonSubtitleTextStyle, buttonSubtitleTextStyle]}>
        {buttonSubtitle}
      </Text>
    </View>
  );

  const renderBottomBar = () => (
    <View style={styles.bottomBarStyle}>
      <View style={styles.innerBottomBarStyle}>
        {renderIcon()}
        {renderTitleContainer()}
        {renderButtonContainer()}
      </View>
    </View>
  );

  return (
    <View style={[styles.shadowStyle, shadowStyle]}>
      <RNBounceable
        bounceEffectIn={0.95}
        {...rest}
        style={[styles.container, style]}
        onPress={onPress}>
        <ImageBackground
          borderRadius={8}
          resizeMode="cover"
          {...rest}
          style={[styles.container, style]}
          source={backgroundSource}>
          <View style={styles.innerContainer}>
            {renderLargeTitle()}
            {renderBottomBar()}
          </View>
        </ImageBackground>
      </RNBounceable>
    </View>
  );
};

export default AppOfTheDayCard;
