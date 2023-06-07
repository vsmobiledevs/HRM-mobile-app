import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {HP, WP, colors} from '../../utilities/exporter';
import RNHeader from '../../components/RNHeader';
import {NavigationProp} from '@react-navigation/native';
import ServiceCard from '../../components/ServiceCard';
import {serviceCard} from '../../utilities/dummyData';

interface Props {
  navigation: NavigationProp<any, any>;
}

const ServicesScreen: React.FC<Props> = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <RNHeader text="Services" image="abc" />

      <View style={styles.miniContainer}>
        <FlatList
          data={serviceCard}
          keyExtractor={(item, index) => `key-${index}${item}`}
          renderItem={({item, index}) => {
            return (
              <ServiceCard
                item={item}
                onPress={() => navigation.navigate(item.screen)}
              />
            );
          }}
          numColumns={2}
          contentContainerStyle={styles.numContainer}
        />
      </View>
    </View>
  );
};
ServicesScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.b2,
  },
  miniContainer: {
    padding: 10,
    flex: 0.91,
  },
  numContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default ServicesScreen;
