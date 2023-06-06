import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {HP, WP, colors} from '../utilities/exporter';

interface Props {
  item: object;
  onPress: (event: GestureResponderEvent) => void;
}

const ServiceCard: React.FC<Props> = props => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      {item?.logo}
      <Text style={styles.nameStyle}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

ServiceCard.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: WP(2),
    flex: 1,
    width: '30%', // Adjust this percentage based on the number of columns
    aspectRatio: 1, // Optional: Set aspect ratio to maintain item's square shape
    margin: 5,
  },
  nameStyle: {
    color: colors.p1,
    position: 'absolute',
    bottom: HP(2),
  },
});

export default ServiceCard;
