import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {HP, WP, colors, signupFormFields, SignupVS} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import {Icons} from '../../assets/svgs';
import { Formik } from 'formik';

interface Props {
  navigation: NavigationProp<any, any>;
}

const SignupScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const [isSeen, setIsSeen] = useState(false);
  const formikRef =useRef();

  const  handleSignup = (values) => {
    navigation.navigate('login');
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
        initialValues={signupFormFields}
        onSubmit={(values, {resetForm}) => {
          handleSignup(values);
        }}
        validationSchema={SignupVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
        <View style={styles.formStyle}>
          <RNInput
            title="First Name"
            inputProps={{
              value: values.firstname,
              style: styles.inputStyle,
              onChangeText: handleChange('firstname'),
            }}
            errorMessage={errors.firstname}
            touched={touched.firstname}
          />
          <RNInput
            title="Last Name"
            inputProps={{
              value: values.lastname,
              style: styles.inputStyle,
              onChangeText: handleChange('lastname'),
            }}
            errorMessage={errors.lastname}
            touched={touched.lastname}
          />
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
          <RNInput
            title="Password"
            inputProps={{
              value: values.password,
              style: styles.inputStyle,
              onChangeText: handleChange('password'),
            }}
            rightIcon={isSeen ? Icons.show : Icons.hide}
            onPress={() => setIsSeen(!isSeen)}
            errorMessage={errors.password}
            touched={touched.password}
          />
          <RNInput
            title="Confirm Password"
            inputProps={{
              value: values.confirmpassword,
              style: styles.inputStyle,
              onChangeText: handleChange('confirmpassword'),
            }}
            errorMessage={errors.confirmpassword}
            touched={touched.confirmpassword}
          />

          <RNButton
            text="Signup"
            btnProps={{
              activeOpacity: 0.8,
              onPress: () => handleSubmit(),
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
        )}
        </Formik>
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
