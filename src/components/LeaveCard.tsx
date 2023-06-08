import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, colors, size} from '../utilities/exporter';
import {Icons} from '../assets/svgs';

interface Props {
  item: object;
  touchProps: object;
}

const LeaveCard: FC<Props> = props => {
  const {item, touchProps} = props;
  console.log(item);
  return (
    <View style={styles.leaveContainer}>
      {/* <View style={styles.firstContainer}>
        <Text style={styles.monthStyle}>{month}</Text>
        <Text style={[styles.monthStyle, {marginHorizontal: WP(1)}]}>
          {year}
        </Text>
      </View> */}
      <View style={styles.secondContainer}>
        <View style={styles.statusContainer}>
          <Text style={styles.detailTxt}>{item?.detail}</Text>
          <View
            style={[
              styles.statusViewStyle,
              item?.status == 'Awaiting'
                ? {backgroundColor: colors.o2}
                : item?.status == 'Approved'
                ? {backgroundColor: colors.gr1}
                : {backgroundColor: colors.g2},
            ]}>
            <Text
              style={[
                styles.statusTxt,
                item?.status == 'Awaiting'
                  ? {color: colors.o3}
                  : item?.status == 'Approved'
                  ? {color: colors.gr2}
                  : {color: colors.red2},
              ]}>
              {item?.status}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.dateTxt}>{item?.date}</Text>
          <View style={styles.statusContainer}>
            <Text
              style={[
                styles.statusTxt,
                item?.reason == 'Sick'
                  ? {color: colors.blue}
                  : {color: colors.y2},
              ]}>
              {item?.reason}
            </Text>
            <TouchableOpacity style={styles.iconContainer} {...touchProps}>
              {Icons.forwordArrow}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaveCard;

const styles = StyleSheet.create({
  monthStyle: {
    fontSize: size.xsmall,
    color: colors.b3,
  },
  leaveContainer: {
    marginHorizontal: WP(5),
  },
  firstContainer: {
    flexDirection: 'row',
    marginHorizontal: WP(3),
    marginTop: WP(5),
  },
  secondContainer: {
    marginTop: WP(2),
    borderRadius: WP(2),
    borderWidth: 0.5,
    padding: WP(4),
    borderColor: colors.b3,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailTxt: {
    fontSize: size.xsmall,
    fontWeight: '600',
    color: colors.b3,
  },
  statusViewStyle: {
    paddingHorizontal: WP(3),
    borderRadius: WP(2),
    paddingVertical: WP(1),
  },
  statusTxt: {
    fontSize: size.xsmall,
    fontWeight: '600',
  },
  dateTxt: {
    fontSize: size.medium,
    fontWeight: '700',
    color: colors.b4,
  },
  iconContainer: {
    backgroundColor: colors.g3,
    padding: WP(2),
    borderRadius: WP(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
