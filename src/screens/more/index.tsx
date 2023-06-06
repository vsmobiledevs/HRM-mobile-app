import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const MoreScreen: React.FC<Props> = props => (
  <View style={styles.container}>
    <Text style={{fontSize: 30}}> MoreScreen </Text>
  </View>
);

MoreScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MoreScreen;
