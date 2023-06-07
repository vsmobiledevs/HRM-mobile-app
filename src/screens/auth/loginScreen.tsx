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
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';

import {
  HP,
  WP,
  colors,
  loginFormFields,
  LoginVS,
} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import {Icons} from '../../assets/svgs';

interface Props {
  navigation: NavigationProp<any, any>;
}

const LoginScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const [isSeen, setIsSeen] = useState(false);
  const formikRef = useRef();

  const handleLogin = values => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View animation="slideInDown" duration={1000} delay={200}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </Animatable.View>

        <Animatable.View
          animation="slideInUp"
          duration={1000}
          delay={200}
          style={styles.formStyle}>
          <Formik
            innerRef={formikRef}
            initialValues={loginFormFields}
            onSubmit={(values, {resetForm}) => {
              handleLogin(values);
            }}
            validationSchema={LoginVS}>
            {({values, errors, touched, handleSubmit, handleChange}) => (
              <>
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

                <RNButton
                  text="Login"
                  btnProps={{
                    activeOpacity: 0.8,
                    onPress: () => handleSubmit(),
                  }}
                  btnStyle={styles.loginBtn}
                  textStyle={styles.textStyle}
                />

                <View style={styles.footerView}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('forgot')}>
                    <Text style={[styles?.footerStyle, {color: colors.p1}]}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('signup')}>
                    <Text style={[styles?.footerStyle, {color: colors.b1}]}>
                      Sign UP
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

LoginScreen.defaultProps = {};

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
  loginBtn: {
    backgroundColor: colors.p1,
    marginTop: HP(5),
    borderRadius: WP(2),
    height: HP(10),
  },
  textStyle: {
    fontWeight: '700',
    fontSize: WP(5),
    lineHeight: HP(5),
    color: colors.white,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: HP(2),
  },
  footerStyle: {
    fontSize: WP(5),
    lineHeight: HP(5),
  },
});

export default LoginScreen;
