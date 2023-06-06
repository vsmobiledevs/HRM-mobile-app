import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import * as Animatable from 'react-native-animatable';

import {HP, WP, colors} from '../../utilities/exporter';
import RNButton from '../../components/RNButton';

interface Props {
  navigation: NavigationProp<any, any>;
}

const OtpScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const [otpCode, setOtpCode] = useState('');
  const [newOTP, setNewOTP] = useState('');
  const [timer, setTimer] = useState(true);
  var isSecond = 60;
  var x;
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (timer) {
      x = setInterval(() => {
        let temp = isSecond - 1;
        isSecond = temp;
        if (isSecond < 10) {
          setCounter('0' + isSecond);
        } else {
          setCounter(isSecond);
        }

        if (isSecond == 0) {
          clearInterval(x);
          setTimer(false);
          setCounter(60);
        }
      }, 1000);
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="cover"
          style={styles.imageStyle}
        />

        <View style={styles.formStyle}>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            delay={200}
            style={styles.otpCodeFullView}>
            <OTPInputView
              selectionColor={colors.b1}
              keyboardType="number-pad"
              pinCount={4}
              codeInputFieldStyle={{
                ...styles.otpCodeFieldStyle,
                color: colors.b1,
                backgroundColor: colors.w1,
                borderColor: colors.white,
              }}
              onCodeFilled={code => {
                setOtpCode(code);
              }}
            />
          </Animatable.View>

          <View style={{marginTop: HP(3)}}>
            {!timer ? (
              <>
                <Text
                  style={{
                    ...styles.otpResendTextStyle,
                    color: colors.g1,
                  }}>
                  Didn’t recive code?
                </Text>
                <TouchableOpacity onPress={() => setTimer(true)}>
                  <Text
                    style={{
                      ...styles.otpResendTextStyle,
                      color: colors.b1,
                      textDecorationLine: 'underline',
                      fontWeight: 'bold',
                    }}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text
                style={{
                  ...styles.otpResendTextStyle,
                  color: colors.b1,
                }}>{`00:${counter}`}</Text>
            )}
          </View>

          <RNButton
            text="Next"
            btnProps={{
              activeOpacity: 0.8,
              onPress: () => navigation.navigate('changePassword'),
            }}
            btnStyle={styles.otpBtn}
            textStyle={styles.textStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

OtpScreen.defaultProps = {};

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

  otpCodeFullView: {
    height: HP(10),
  },

  otpCodeFieldStyle: {
    borderRadius: WP(5),
    height: WP(20),
    width: WP(20),
    borderWidth: 1,
    fontSize: HP(3),
  },

  otpResendTextStyle: {
    fontSize: WP(3.5),
    alignSelf: 'center',
    marginBottom: HP(0.5),
  },

  formStyle: {
    marginHorizontal: WP(6),
  },
  otpBtn: {
    backgroundColor: colors.p1,
    marginTop: HP(5),
    borderRadius: WP(2),
  },
  textStyle: {
    fontWeight: '700',
    fontSize: WP(5),
    lineHeight: HP(5),
    color: colors.white,
  },
});

export default OtpScreen;
