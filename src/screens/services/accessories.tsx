import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {colors} from '../../utilities/exporter';
import RNHeader from '../../components/RNHeader';

interface Props {
  navigation: NavigationProp<any, any>;
}

const Accessories: FC<Props> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <RNHeader
        text="Accessories"
        leftOnPress={() => navigation.goBack()}
        addPress={() => navigation.navigate('newAccessory')}
        image=""
      />
    </View>
  );
};

export default Accessories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
