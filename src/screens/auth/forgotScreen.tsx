import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {HP, WP, colors} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';

interface Props {
  navigation: NavigationProp<any, any>;
}

const ForgotScreen: React.FC<Props> = props => {
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

          <RNButton
            text="Next"
            btnProps={{
              activeOpacity: 0.8,
              onPress: () => navigation.navigate('otp', {email: ''}),
            }}
            btnStyle={styles.forgotBtn}
            textStyle={styles.textStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

ForgotScreen.defaultProps = {};

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
  forgotBtn: {
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

export default ForgotScreen;
