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
  touched: boolean | undefined;
  errorMessage: string | undefined;
  rightIcon: any;
  onPress: (Event: GestureResponderEvent) => void;
  inputStyle: object;
}

const RNInput: React.FC<Props> = props => {
  const {
    title,
    inputProps,
    touched,
    errorMessage,
    rightIcon,
    onPress,
    inputStyle,
  } = props;
  return (
    <>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      <View style={[{...styles.inputStyle}, inputStyle]}>
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
    borderColor: colors.p1,
    borderWidth: 0.5,
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
    marginTop: HP(0.5),
  },
  rightIconStyle: {
    justifyContent: 'center',
  },
});

export default RNInput;
