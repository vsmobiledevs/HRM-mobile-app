import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, FlatList} from 'react-native';
import {HP, WP, colors} from '../../utilities/exporter';
import RNHeader from '../../components/RNHeader';
import {NavigationProp} from '@react-navigation/native';
import {groupBtns} from '../../utilities/dummyData';
import RNButton from '../../components/RNButton';
import LeaveCard from '../../components/LeaveCard';

interface Props {
  navigation: NavigationProp<any, any>;
}

const Leaves: React.FC<Props> = props => {
  const {navigation} = props;

  const [isIndex, setIsIndex] = useState();
  const leaveList = [
    {
      id: 1,
      detail: 'Half Day Application',
      status: 'Awaiting',
      date: 'Wed, 16 Dec',
      reason: 'Casual',
    },
    {
      id: 2,
      detail: 'Full Day Application',
      status: 'Approved',
      date: 'Wed, 16 Dec',
      reason: 'Casual',
    },
    {
      id: 3,
      detail: 'Full Day Application',
      status: 'Decline',
      date: 'Wed, 18 Dec',
      reason: 'Sick',
    },
  ];

  return (
    <View style={styles.container}>
      <RNHeader
        text="Leaves"
        leftOnPress={() => navigation.goBack()}
        addPress={() => null}
        image=""
      />

      <View style={styles.groupBtnView}>
        {groupBtns.map((i, index: number) => {
          return (
            <RNButton
              text={i.name}
              btnStyle={[
                styles.groupBtnStyle,
                {
                  backgroundColor:
                    index == isIndex ? colors.white : 'transparent',
                },
              ]}
              textStyle={[
                styles.groupBtnText,
                {color: index == isIndex ? colors.b0 : colors.white},
              ]}
              btnProps={{
                onPress: () => {
                  setIsIndex(index);
                },
              }}
            />
          );
        })}
      </View>
      <FlatList
        data={leaveList}
        renderItem={item => {
          return <LeaveCard item={item?.item} />;
        }}
      />
    </View>
  );
};

Leaves.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  groupBtnView: {
    marginHorizontal: WP(5),
    backgroundColor: colors.p1,
    height: HP(5.9),
    borderRadius: WP(2),
    marginTop: HP(2),
    justifyContent: 'space-between',
    borderColor: 'transparent',
    flexDirection: 'row',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  groupBtnStyle: {
    width: WP(30),
    borderRadius: WP(2),
    backgroundColor: 'white',

    justifyContent: 'center',
    alignSelf: 'center',
  },
  groupBtnText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default Leaves;
