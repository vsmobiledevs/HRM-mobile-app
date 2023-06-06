import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const DatePicket: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}> datePicket </Text>
    </View>
  );
};

DatePicket.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default DatePicket;
