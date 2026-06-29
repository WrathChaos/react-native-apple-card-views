import {ViewStyle, TextStyle, StyleSheet} from 'react-native';

interface Style {
  shadowStyle: ViewStyle;
  bottomContainer: ViewStyle;
  backgroundStyle: ViewStyle;
  footnoteTextStyle: TextStyle;
  topHeaderContainer: ViewStyle;
  smallTitleTextStyle: TextStyle;
  largeTitleTextStyle: TextStyle;
}

/**
 * Style factory parameterised by the live window size so the card reacts to
 * rotation / resize instead of capturing `Dimensions.get('window')` once at
 * module load. The numeric ratios match the original 3.0.0 layout exactly.
 */
export default (screenWidth: number, screenHeight: number) =>
  StyleSheet.create<Style>({
    shadowStyle: {
      shadowColor: '#000',
      shadowRadius: 6,
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 9,
      },
      elevation: 3,
    },
    backgroundStyle: {
      borderRadius: 8,
      width: screenWidth * 0.9,
      height: screenHeight * 0.5,
    },
    topHeaderContainer: {
      margin: 16,
      width: screenWidth * 0.7,
    },
    smallTitleTextStyle: {
      fontSize: 16,
      opacity: 0.8,
      color: '#ebe8f9',
      fontWeight: '700',
    },
    largeTitleTextStyle: {
      fontSize: 32,
      opacity: 0.9,
      color: '#fffdfe',
      fontWeight: 'bold',
    },
    bottomContainer: {
      left: 16,
      bottom: 16,
      width: '90%',
      position: 'absolute',
    },
    footnoteTextStyle: {
      fontSize: 12,
      color: '#fffdfe',
    },
  });
