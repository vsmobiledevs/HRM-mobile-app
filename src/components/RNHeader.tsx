import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {HP, WP, colors} from '../utilities/exporter';
import {Icons} from '../assets/svgs';

interface Props {
  text: string;
  notiPress: (event: GestureResponderEvent) => void;
  addPress: (event: GestureResponderEvent) => void;
  image: string;
  leftOnPress: (event: GestureResponderEvent) => void;
  rightView: boolean;
}

const RNHeader: React.FC<Props> = props => {
  const {text, notiPress, addPress, image, leftOnPress, rightView} = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        {image ? (
          <Image
            // source={require('../assets/images/splashImage.png')}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
            }}
            resizeMode="cover"
            style={styles.profileStyle}
          />
        ) : (
          <TouchableOpacity onPress={leftOnPress}>
            {Icons.backArrow}
          </TouchableOpacity>
        )}
        <Text style={styles.headerTextStyle}>{text}</Text>
      </View>
      {rightView ? (
        <View style={styles.rightView}>
          <TouchableOpacity onPress={notiPress} style={styles.rightBtn}>
            {Icons.noti}
          </TouchableOpacity>
          {addPress ? (
            <TouchableOpacity onPress={addPress} style={styles.rightBtn}>
              {Icons.add}
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

RNHeader.defaultProps = {
  text: '',
  notiPress: () => null,
  image: '',
  leftOnPress: () => null,
  rightView: true,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: HP(2),
    backgroundColor: colors.p1,
    height: HP(8),
  },
  profileStyle: {
    width: WP(13),
    height: WP(13),
    borderRadius: WP(5),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: WP(5),
  },
  headerTextStyle: {
    fontWeight: '700',
    color: colors.white,
    marginLeft: WP(5),
    fontSize: WP(7),
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: WP(5),
  },
  rightBtn: {alignSelf: 'center', marginHorizontal: WP(1)},
});

export default RNHeader;
