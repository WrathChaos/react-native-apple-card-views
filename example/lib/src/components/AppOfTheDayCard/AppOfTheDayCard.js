import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const NewComponent = props => {
  const {} = props;
  return (
    <View>
      <Text>New Component</Text>
    </View>
  );
};

NewComponent.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string,
};

NewComponent.defaultProps = {
  stars: 5,
  ratings: 'Hellooo',
};

export default NewComponent;
