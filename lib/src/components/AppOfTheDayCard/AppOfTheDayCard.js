import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, Dimensions, ImageBackground} from 'react-native';
import Androw from 'react-native-androw';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const AppOfTheDayCard = props => {
  const {} = props;
  return (
    <Androw
      style={{
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      }}>
      <ImageBackground
        style={{
          height: height * 0.5,
          width: width * 0.9,
          borderRadius: 8,
          flexDirection: 'column',
        }}
        source={require('../../../../assets/hero_bg_brawlstars_.jpg')}
        resizeMode="cover"
        borderRadius={8}>
        <View style={{position: 'absolute', bottom: 16, left: 16}}>
          <Text
            style={{
              color: '#fffeff',
              fontSize: 32,
              fontWeight: '900',
              fontFamily: 'System',
            }}>
            APP {'\n'}OF THE {'\n'}DAY
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#de9c7c', '#ef9f81', '#efa192']}
            style={{
              width: width * 0.9,
              right: 16,
              top: 16,
              height: 75,
              borderBottomStartRadius: 8,
              borderBottomEndRadius: 8,
            }}>
            <View
              style={{
                margin: 16,
                flexDirection: 'row',
              }}>
              <Image
                borderRadius={12}
                source={require('../../../../assets/Colorfy.jpg')}
                style={{height: 45, width: 45}}
                resizeMode="cover"
              />
              <View style={{marginLeft: 12, width: 120}}>
                <Text
                  numberOfLines={2}
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'System',
                  }}>
                  Colorfy: Coloring Art Games
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    marginTop: 3,
                    color: 'white',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'System',
                  }}>
                  Drawing & painting for asdaf sdfa sdf sad f
                </Text>
              </View>
              <View style={{position: 'absolute', right: 4, top: 8}}>
                <View
                  style={{
                    width: 75,
                    height: 30,
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f1f6',
                  }}>
                  <Text
                    style={{
                      color: '#056dff',
                      textAlign: 'center',
                      fontWeight: '700',
                    }}>
                    GET
                  </Text>
                </View>
                <Text
                  style={{
                    marginLeft: 3,
                    marginTop: 5,
                    color: 'white',
                    fontSize: 8,
                    fontWeight: '400',
                  }}>
                  In-App Purchases
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </Androw>
  );
};

AppOfTheDayCard.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string,
};

AppOfTheDayCard.defaultProps = {
  stars: 5,
  ratings: 'Hellooo',
};

export default AppOfTheDayCard;
