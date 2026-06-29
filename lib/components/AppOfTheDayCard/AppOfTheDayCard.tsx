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
  useWindowDimensions,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
/**
 * ? Local Imports
 */
import makeStyles from './AppOfTheDayCard.style';

export interface IAppOfTheDayCardProps {
  title: string;
  iconSource: ImageSourcePropType;
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
  /**
   * @deprecated Reserved for a future gradient overlay. Currently a no-op so
   * the visual output is unchanged; kept to preserve the public prop surface.
   */
  gradientColors?: string[];
  accessibilityLabel?: string;
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
  // Destructured purely so it is excluded from `...rest`; intentionally unused.
  gradientColors: _gradientColors,
  accessibilityLabel,
  onButtonPress,
  buttonText,
  onPress,
  ...rest
}) => {
  const {width, height} = useWindowDimensions();
  const styles = React.useMemo(() => makeStyles(width, height), [width, height]);

  return (
    <View style={[styles.shadowStyle, shadowStyle]}>
      <RNBounceable
        bounceEffectIn={0.95}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? title}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        style={[styles.container, style]}
        onPress={onPress}
        {...rest}>
        <ImageBackground
          borderRadius={8}
          resizeMode="cover"
          style={[styles.container, style]}
          source={backgroundSource}>
          <View style={styles.innerContainer}>
            <Text style={[styles.largeTitleTextStyle, largeTitleTextStyle]}>
              {largeTitle}
            </Text>
            <View style={styles.bottomBarStyle}>
              <View style={styles.innerBottomBarStyle}>
                <Image
                  borderRadius={12}
                  resizeMode="cover"
                  source={iconSource}
                  style={[styles.iconStyle, iconStyle]}
                />
                <View style={styles.titleContainer}>
                  <Text
                    numberOfLines={2}
                    style={[styles.titleTextStyle, titleTextStyle]}>
                    {title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.subtitleTextStyle, subtitleTextStyle]}>
                    {subtitle}
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <RNBounceable
                    accessibilityRole="button"
                    accessibilityLabel={buttonText}
                    hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
                    style={styles.buttonInnerContainer}
                    onPress={onButtonPress}>
                    <Text style={styles.buttonTextStyle}>{buttonText}</Text>
                  </RNBounceable>
                  <Text
                    style={[
                      styles.buttonSubtitleTextStyle,
                      buttonSubtitleTextStyle,
                    ]}>
                    {buttonSubtitle}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </RNBounceable>
    </View>
  );
};

AppOfTheDayCard.displayName = 'AppOfTheDayCard';

const MemoizedAppOfTheDayCard = React.memo(AppOfTheDayCard);
MemoizedAppOfTheDayCard.displayName = 'AppOfTheDayCard';

export default MemoizedAppOfTheDayCard;
