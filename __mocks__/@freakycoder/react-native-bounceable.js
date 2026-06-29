/**
 * Deterministic test double for @freakycoder/react-native-bounceable.
 *
 * The real component animates a scale bounce on press; for unit tests we only
 * care that it forwards `onPress`, accessibility props and children, so we map
 * it onto a plain Pressable and drop the bounce-only props.
 */
const React = require('react');
const {Pressable} = require('react-native');

const RNBounceable = React.forwardRef(function RNBounceable(props, ref) {
  const {
    bounceEffectIn,
    bounceEffectOut,
    bounceVelocityIn,
    bounceVelocityOut,
    bouncinessIn,
    bouncinessOut,
    children,
    ...rest
  } = props;
  return React.createElement(Pressable, {ref, ...rest}, children);
});

RNBounceable.displayName = 'RNBounceable';

module.exports = RNBounceable;
module.exports.default = RNBounceable;
