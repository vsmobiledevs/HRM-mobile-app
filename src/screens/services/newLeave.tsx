import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utilities/exporter';
import RNHeader from '../../components/RNHeader';
import {NavigationProp} from '@react-navigation/native';
import DatePicker from '../../components/DatePicker';

interface Props {
  navigation: NavigationProp<any, any>;
}

const NewLeave: React.FC<Props> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <RNHeader
        text="New Leave"
        leftOnPress={() => navigation.goBack()}
        image=""
      />
      <DatePicker
        text="Start Date"
        selectDate={d => console.log(d)}
        maximumDate={new Date('2023')}
        minimumDate={new Date()}
      />
    </View>
  );
};

NewLeave.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default NewLeave;
