import * as React from "react";
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import Androw from "react-native-androw";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _shadowStyle } from "./AppleCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<ViewStyle>>;

interface IProps {
  source: ImageSourcePropType;
  style?: CustomStyleProp;
  smallTitle: string;
  largeTitle: string;
  footnoteText: string;
  shadowColor?: string;
  backgroundStyle?: CustomStyleProp;
  footnoteTextStyle?: CustomTextStyleProp;
  smallTitleTextStyle?: CustomTextStyleProp;
  largeTitleTextStyle?: CustomTextStyleProp;
  onPress: () => void;
}

const AppleCard: React.FC<IProps> = (props: IProps) => {
  const {
    source,
    style,
    shadowColor,
    footnoteText,
    footnoteTextStyle,
    backgroundStyle,
    smallTitle,
    largeTitle,
    smallTitleTextStyle,
    largeTitleTextStyle,
    onPress,
  } = props;

  return (
    <Androw style={_shadowStyle(shadowColor)}>
      <RNBounceable
        bounceEffect={0.95}
        bounceFriction={4}
        {...props}
        style={style}
        onPress={onPress}
      >
        <ImageBackground
          {...props}
          source={source}
          borderRadius={8}
          resizeMode="cover"
          style={[styles.backgroundStyle, backgroundStyle]}
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
      </RNBounceable>
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
