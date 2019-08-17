import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Dimensions, ImageBackground} from 'react-native';
import Androw from 'react-native-androw';

const {height, width} = Dimensions.get('window');

const AppleCard = props => {
  const {} = props;
  return (
    <Androw
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      }}>
      <ImageBackground
        style={{height: height * 0.5, width: width * 0.9, borderRadius: 8}}
        source={require('../../../../assets/hero_bg_brawlstars_.jpg')}
        resizeMode="cover"
        borderRadius={8}>
        <View style={{margin: 16}}>
          <Text
            style={{
              fontSize: 16,
              opacity: 0.8,
              color: '#ebe8f9',
              fontWeight: '700',
              fontFamily: 'System',
            }}>
            NEW GAME
          </Text>
          <Text
            style={{
              color: '#fffdfe',
              fontSize: 32,
              opacity: 0.9,
              fontWeight: 'bold',
              fontFamily: 'System',
            }}>
            The Brilliance of Brawl Stars
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            width: '90%',
          }}>
          <Text
            style={{
              color: '#fffdfe',
              fontSize: 12,
              fontFamily: 'System',
            }}>
            The next game from the markers of Clash Royale is here. Tap to learn
            more.
          </Text>
        </View>
      </ImageBackground>
    </Androw>
  );
};

AppleCard.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string,
};

AppleCard.defaultProps = {
  stars: 5,
  ratings: 'Hellooo',
};

export default AppleCard;
