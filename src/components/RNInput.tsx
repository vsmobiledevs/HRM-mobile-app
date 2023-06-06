import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {HP, WP, colors} from '../utilities/exporter';
import {Icons} from '../assets/svgs';

interface Props {
  title: string;
  inputProps: object;
  touched: boolean;
  errorMessage: string;
  rightIcon: any;
  onPress: any;
}

const RNInput: React.FC<Props> = props => {
  const {title, inputProps, touched, errorMessage, rightIcon, onPress} = props;
  return (
    <>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      <View style={styles.inputStyle}>
        <TextInput {...inputProps} />
        <TouchableOpacity style={styles.rightIconStyle} onPress={onPress}>
          {rightIcon}
        </TouchableOpacity>
      </View>
      {touched && errorMessage && (
        <Text style={styles.error}>{errorMessage || ''}</Text>
      )}
    </>
  );
};

RNInput.defaultProps = {};

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.b1,
    borderWidth: 1,
    borderRadius: WP(2),
    height: HP(6),
    paddingLeft: 5,
    paddingRight: 10,
  },
  titleStyle: {
    color: colors.b1,
    fontSize: WP(5),
    marginVertical: HP(1),
  },
  error: {
    color: colors.red,
    marginStart: HP(4),
    marginTop: HP(0.5),
  },
  rightIconStyle: {
    justifyContent: 'center',
  },
});

export default RNInput;
