import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {HP, WP, colors} from '../utilities/exporter';

interface Props {
  text: string;
  btnProps: object;
  textStyle: object;
  btnStyle: any;
}

const RNButton: React.FC<Props> = props => {
  const {btnProps, textStyle, text, btnStyle} = props;

  return (
    <TouchableOpacity {...btnProps} style={[{...styles.btn}, btnStyle]}>
      <Text style={[styles?.signIn, textStyle]}> {text} </Text>
    </TouchableOpacity>
  );
};

RNButton.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    height: HP(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    fontWeight: '700',
    fontSize: WP(5),
    lineHeight: HP(5),
  },
});

export default RNButton;
