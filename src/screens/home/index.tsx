import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, AppState} from 'react-native';
import moment from 'moment';

import {HP, WP, colors} from '../../utilities/exporter';
import RNHeader from '../../components/RNHeader';
import RNButton from '../../components/RNButton';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any, any>;
}

const HomeScreen: React.FC<Props> = props => {
  const {navigation} = props;

  const [isRunning, setIsRunning] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  return (
    <View style={styles.container}>
      <RNHeader text="Home" image="abc" />

      <View style={styles.accounmentView}>
        <View style={{width: WP(60)}}>
          <Text style={styles.updateStyle}>Update</Text>
          <Text
            numberOfLines={3}
            style={[
              styles.updateStyle,
              {
                fontWeight: '400',
                fontSize: WP(4),
                marginTop: HP(1),
              },
            ]}>
            You can use '--warning-mode all' to show the individual deprecation
            warnings and determine if they come from your own scripts or
            plugins.
          </Text>
        </View>
        <Image
          source={require('../../assets/images/annocment.png')}
          resizeMode="contain"
          style={styles.annoStyle}
        />
      </View>
      <View style={styles.checkInView}>
        <Image
          source={require('../../assets/images/sun.png')}
          resizeMode="contain"
          style={styles.sunStyle}
        />

        <Text
          style={[
            styles.timerStyle,
            {alignSelf: 'flex-start', fontSize: WP(5), marginTop: HP(5)},
          ]}>{`Check IN:    ${
          checkIn ? moment(checkIn).format('hh:mm A') : 'pending'
        }`}</Text>
        <Text
          style={[
            styles.timerStyle,
            {alignSelf: 'flex-start', fontSize: WP(5), marginTop: HP(2)},
          ]}>{`Check OUT:    ${
          checkOut ? moment(checkOut).format('hh:mm A') : 'pending'
        }`}</Text>
        <RNButton
          text={isRunning ? 'CHECK OUT' : 'CHECK IN'}
          btnProps={{
            activeOpacity: 0.8,
            onPress: () => {
              setIsRunning(true);
              if (isRunning) {
                setCheckOut(new Date());
              } else {
                setCheckIn(new Date());
              }
            },
          }}
          textStyle={styles.checkInText}
          btnStyle={styles.checkInBtn}
        />
        <Text
          style={[styles.timerStyle, {fontWeight: '800', fontSize: WP(4.5)}]}>
          {`GENERAL 12:00AM  TO 8:00AM`}
        </Text>
      </View>
    </View>
  );
};

HomeScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.b2,
  },
  annoStyle: {
    width: WP(45),
    height: WP(45),
    position: 'absolute',
    right: 0,
    top: -WP(9),
  },
  accounmentView: {
    backgroundColor: colors.white,
    marginHorizontal: WP(5),
    height: HP(15),
    borderRadius: WP(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: HP(4),
  },

  updateStyle: {
    fontWeight: '700',
    color: colors.b0,
    marginLeft: WP(5),
    fontSize: WP(7),
    marginTop: HP(2),
  },
  checkInView: {
    backgroundColor: colors.white,
    padding: WP(5),
    marginHorizontal: WP(5),
    borderRadius: WP(3),
  },
  sunStyle: {
    alignSelf: 'center',
  },
  timerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: HP(4),
  },
  timerBox: {
    width: WP(20),
    height: HP(9),
    backgroundColor: colors.b2,
    marginHorizontal: WP(2),
    borderRadius: WP(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerStyle: {
    color: colors.b1,
    fontSize: WP(6),
    alignSelf: 'center',
    fontWeight: '700',
  },
  checkInText: {
    color: colors.white,
  },
  checkInBtn: {
    width: WP(30),
    borderRadius: WP(2),
    backgroundColor: colors.p1,
    alignSelf: 'center',
    marginVertical: HP(3),
  },
});

export default HomeScreen;
