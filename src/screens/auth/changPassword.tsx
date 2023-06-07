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

import {
  ChangePassVS,
  HP,
  WP,
  changePassFormFields,
  colors,
} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import {Icons} from '../../assets/svgs';
import {Formik} from 'formik';
import RNHeader from '../../components/RNHeader';

interface Props {
  navigation: NavigationProp<any, any>;
}

const ChangePassword: React.FC<Props> = props => {
  const {navigation} = props;
  const [isSeen, setIsSeen] = useState(false);
  const formikRef = useRef();
  const handleChangePass = values => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <RNHeader leftOnPress={() => navigation.goBack()} rightView={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <Formik
          innerRef={formikRef}
          initialValues={changePassFormFields}
          onSubmit={(values, {resetForm}) => {
            handleChangePass(values);
          }}
          validationSchema={ChangePassVS}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <View style={styles.formStyle}>
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
                  value: values.confirmPassword,
                  style: styles.inputStyle,
                  onChangeText: handleChange('confirmPassword'),
                }}
                errorMessage={errors.confirmPassword}
                touched={touched.confirmPassword}
              />

              <RNButton
                text="Done"
                btnProps={{
                  activeOpacity: 0.8,
                  onPress: () => handleSubmit(),
                }}
                btnStyle={styles.loginBtn}
                textStyle={styles.textStyle}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

ChangePassword.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: WP(100),
    height: HP(20),
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

export default ChangePassword;
