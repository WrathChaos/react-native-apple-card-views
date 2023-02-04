import * as React from 'react';
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
/**
 * ? Local Imports
 */
import styles from './AppleCard.style';

interface IProps {
  source: ImageSourcePropType;
  smallTitle: string;
  largeTitle: string;
  footnote: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  shadowStyle?: StyleProp<ViewStyle>;
  backgroundStyle?: StyleProp<ViewStyle>;
  footnoteTextStyle?: StyleProp<TextStyle>;
  smallTitleTextStyle?: StyleProp<TextStyle>;
  largeTitleTextStyle?: StyleProp<TextStyle>;
}

const AppleCard: React.FC<IProps> = ({
  source,
  style,
  footnote,
  footnoteTextStyle,
  backgroundStyle,
  smallTitle,
  largeTitle,
  shadowStyle,
  smallTitleTextStyle,
  largeTitleTextStyle,
  onPress,
  ...rest
}) => {
  return (
    <View style={[styles.shadowStyle, shadowStyle]}>
      <RNBounceable
        bounceEffectIn={0.95}
        {...rest}
        style={style}
        onPress={onPress}>
        <ImageBackground
          {...rest}
          source={source}
          borderRadius={8}
          resizeMode="cover"
          style={[styles.backgroundStyle, backgroundStyle]}>
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
              {footnote}
            </Text>
          </View>
        </ImageBackground>
      </RNBounceable>
    </View>
  );
};

export default AppleCard;
