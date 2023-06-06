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
import * as Animatable from 'react-native-animatable';

import {HP, WP, colors} from '../../utilities/exporter';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import {Icons} from '../../assets/svgs';

interface Props {
  navigation: NavigationProp<any, any>;
}

const ChangePassword: React.FC<Props> = props => {
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
            text="Done"
            btnProps={{
              activeOpacity: 0.8,
              onPress: () => navigation.navigate('login'),
            }}
            btnStyle={styles.loginBtn}
            textStyle={styles.textStyle}
          />
        </View>
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
