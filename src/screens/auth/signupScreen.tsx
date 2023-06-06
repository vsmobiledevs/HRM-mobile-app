import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {HP, WP, colors} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import {Icons} from '../../assets/svgs';

interface Props {
  navigation: NavigationProp<any, any>;
}

const SignupScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const [isSeen, setIsSeen] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <View style={styles.formStyle}>
          <RNInput
            title="First Name"
            inputProps={{
              // value: values.email,
              style: styles.inputStyle,
              // onChangeText: handleChange('email'),
            }}
          />
          <RNInput
            title="Last Name"
            inputProps={{
              // value: values.email,
              style: styles.inputStyle,
              // onChangeText: handleChange('email'),
            }}
          />
          <RNInput
            title="Email"
            inputProps={{
              // value: values.email,
              placeholder: 'example@gmail.com',
              keyboardType: 'email-address',
              placeholderTextColor: colors.b1,
              style: styles.inputStyle,
              // onChangeText: handleChange('email'),
            }}
          />
          <RNInput
            title="Password"
            inputProps={{
              // value: values.email,
              style: styles.inputStyle,
              // onChangeText: handleChange('email'),
            }}
            rightIcon={isSeen ? Icons.show : Icons.hide}
            onPress={() => setIsSeen(!isSeen)}
          />
          <RNInput
            title="Confirm Password"
            inputProps={{
              // value: values.email,
              style: styles.inputStyle,
              // onChangeText: handleChange('email'),
            }}
          />

          <RNButton
            text="Signup"
            btnProps={{
              activeOpacity: 0.8,
              onPress: () => navigation.navigate('login'),
            }}
            btnStyle={styles.signupBtn}
            textStyle={styles.textStyle}
          />

          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={[styles?.footerStyle, {color: colors.b1}]}>
              Sign IN
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

SignupScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: WP(100),
    height: HP(30),
    alignSelf: 'center',
  },
  inputStyle: {
    width: WP(70),
    color: colors.b0,
  },
  formStyle: {
    marginHorizontal: WP(6),
  },
  signupBtn: {
    backgroundColor: colors.p1,
    marginTop: HP(5),
  },
  textStyle: {
    fontWeight: '700',
    fontSize: WP(5),
    lineHeight: HP(5),
    color: colors.white,
  },
  footerStyle: {
    fontSize: WP(5),
    lineHeight: HP(5),
  },
});

export default SignupScreen;
