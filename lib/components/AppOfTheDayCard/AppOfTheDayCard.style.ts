import {ViewStyle, TextStyle, ImageStyle, StyleSheet} from 'react-native';

interface Style {
  container: ViewStyle;
  shadowStyle: ViewStyle;
  iconStyle: ImageStyle;
  bottomBarStyle: ViewStyle;
  innerBottomBarStyle: ViewStyle;
  titleContainer: ViewStyle;
  innerContainer: ViewStyle;
  titleTextStyle: TextStyle;
  buttonContainer: ViewStyle;
  buttonTextStyle: TextStyle;
  subtitleTextStyle: TextStyle;
  largeTitleTextStyle: TextStyle;
  buttonInnerContainer: ViewStyle;
  buttonSubtitleTextStyle: TextStyle;
}

/**
 * Style factory parameterised by the live window size so the card reacts to
 * rotation / resize instead of capturing `Dimensions.get('window')` once at
 * module load. The numeric ratios match the original 3.0.0 layout exactly.
 */
export default (screenWidth: number, screenHeight: number) =>
  StyleSheet.create<Style>({
    container: {
      height: screenHeight * 0.5,
      width: screenWidth * 0.9,
      borderRadius: 8,
      flexDirection: 'column',
    },
    shadowStyle: {
      flex: 1,
      shadowColor: '#000',
      shadowRadius: 6,
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 9,
      },
      elevation: 3,
    },
    innerContainer: {
      left: 16,
      bottom: 16,
      position: 'absolute',
    },
    largeTitleTextStyle: {
      fontSize: 35,
      lineHeight: 33,
      color: '#fffeff',
      fontWeight: '900',
      fontFamily: 'System',
      textAlign: 'justify',
    },
    bottomBarStyle: {
      top: 16,
      right: 16,
      height: 75,
      width: screenWidth * 0.9,
      borderBottomEndRadius: 8,
      borderBottomStartRadius: 8,
      backgroundColor: '#ef9f81',
    },
    innerBottomBarStyle: {
      margin: 16,
      flexDirection: 'row',
    },
    iconStyle: {
      width: 45,
      height: 45,
    },
    titleContainer: {
      width: 120,
      marginLeft: 12,
    },
    titleTextStyle: {
      fontSize: 14,
      color: 'white',
      fontWeight: '600',
      fontFamily: 'System',
    },
    subtitleTextStyle: {
      marginTop: 3,
      fontSize: 12,
      color: 'white',
      fontWeight: '500',
      fontFamily: 'System',
    },
    buttonContainer: {
      top: 8,
      right: 4,
      position: 'absolute',
    },
    buttonInnerContainer: {
      width: 75,
      height: 30,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f1f6',
    },
    buttonTextStyle: {
      color: '#056dff',
      fontWeight: '700',
      textAlign: 'center',
    },
    buttonSubtitleTextStyle: {
      fontSize: 8,
      marginTop: 5,
      marginLeft: 3,
      color: 'white',
      fontWeight: '400',
    },
  });
