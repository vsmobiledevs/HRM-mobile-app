import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {ForgotPassVS, HP, WP, colors, forgotPassFormFields} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import { Formik } from 'formik';

interface Props {
  navigation: NavigationProp<any, any>;
}

const ForgotScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const [isSeen, setIsSeen] = useState(false);
  const formikRef = useRef();
  const handleForgotPass = (values) => { 
    navigation.navigate('otp', {email: ''});
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <Formik
        innerRef={formikRef}
        initialValues={forgotPassFormFields}
        onSubmit={(values, {resetForm}) => {
          handleForgotPass(values);
        }}
        validationSchema={ForgotPassVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
        <View style={styles.formStyle}>
          <RNInput
            title="Email"
            inputProps={{
              value: values.email,
              placeholder: 'example@gmail.com',
              keyboardType: 'email-address',
              placeholderTextColor: colors.b1,
              style: styles.inputStyle,
              onChangeText: handleChange('email'),
            }}
            errorMessage={errors.email}
            touched={touched.email}
          />

          <RNButton
            text="Next"
            btnProps={{
              activeOpacity: 0.8,
              onPress: () => handleSubmit(),
            }}
            btnStyle={styles.forgotBtn}
            textStyle={styles.textStyle}
          />
        </View>)}</Formik>
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
