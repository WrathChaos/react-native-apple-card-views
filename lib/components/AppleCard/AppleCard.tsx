import * as React from 'react';
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageBackground,
  ImageSourcePropType,
  useWindowDimensions,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
/**
 * ? Local Imports
 */
import makeStyles from './AppleCard.style';

export interface IAppleCardProps {
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
  accessibilityLabel?: string;
}

const AppleCard: React.FC<IAppleCardProps> = ({
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
  accessibilityLabel,
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
        accessibilityLabel={accessibilityLabel ?? largeTitle}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        style={style}
        onPress={onPress}
        {...rest}>
        <ImageBackground
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

AppleCard.displayName = 'AppleCard';

const MemoizedAppleCard = React.memo(AppleCard);
MemoizedAppleCard.displayName = 'AppleCard';

export default MemoizedAppleCard;
