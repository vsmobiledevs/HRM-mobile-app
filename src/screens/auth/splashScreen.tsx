import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

import RNButton from '../../components/RNButton';
import {colors, WP, HP} from '../../utilities/exporter';
import {Icons} from '../../assets/svgs';

interface Props {
  navigation: NavigationProp<any, any>;
}

const SplashScreen: React.FC<Props> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {Icons.logo}

      <Image
        source={require('../../assets/images/splashImage.png')}
        resizeMode="contain"
        style={styles.imageStyle}
      />

      <Animatable.View
        animation="slideInUp"
        duration={1000}
        delay={200}
        style={styles.footerView}>
        <Text style={styles.welcomStyle}>Welcome!</Text>
        <Text style={styles.desStyle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
        <RNButton
          text="Sign In"
          btnProps={{
            activeOpacity: 0.8,
            onPress: () => navigation.navigate('login'),
          }}
          btnStyle={styles.signInBtn}
          textStyle={styles.signInText}
        />
      </Animatable.View>
    </View>
  );
};

SplashScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: WP(80),
    height: HP(50),
    alignSelf: 'center',
  },
  footerView: {
    width: WP(100),
    height: HP(40),
    backgroundColor: colors.p1,
    borderTopLeftRadius: WP(5),
    borderTopRightRadius: WP(5),
    padding: WP(7),
  },
  welcomStyle: {
    fontWeight: '700',
    fontSize: WP(7),
    lineHeight: HP(5),
    color: colors.white,
  },
  desStyle: {
    fontWeight: '400',
    fontSize: WP(4),
    lineHeight: HP(3.5),
    color: colors.white,
    marginTop: HP(2),
    marginBottom: HP(8),
  },
  signInBtn: {
    backgroundColor: colors.white,
    borderRadius: WP(2),
  },
  signInText: {
    color: colors.b1,
  },
});

export default SplashScreen;
