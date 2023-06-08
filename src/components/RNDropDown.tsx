import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  GestureResponderEvent,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import {HP, WP, colors} from '../utilities/exporter';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  list: object;
}

const RNDropDown: React.FC<Props> = props => {
  const {onPress, title, list} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState(list);

  return (
    <>
      <Text style={styles.titleStyle}>{title}</Text>
      <DropDownPicker
        items={items}
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        maxHeight={HP(14)}
        zIndex={0}
        dropDownDirection="BOTTOM"
        scrollViewProps={{nestedScrollEnabled: true}}
        flatListProps={{nestedScrollEnabled: true}}
        showArrowIcon={true}
        showTickIcon={true}
        placeholder={'Select Leave Type'}
        placeholderStyle={{
          color: colors.b1,
          fontSize: WP(4.5),
        }}
        searchPlaceholderTextColor="black"
        style={styles.dropdownStyle}
        dropDownContainerStyle={[styles.dropDownContainerStyle]}
        textStyle={styles.textStyle1}
        renderListItem={(item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onPress(item?.item);
                setOpen(false);
                setValue(item.value);
              }}
              style={styles.itemView}>
              <View style={[styles.dotStyle, {backgroundColor: colors.o1}]} />
              <Text numberOfLines={1} style={styles.textStyle}>
                {item.value}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

RNDropDown.defaultProps = {};

export default RNDropDown;

const styles = {
  titleStyle: {
    fontSize: WP(4),
    fontWeight: '600',
    color: colors.p1,
    marginVertical: HP(1),
  },
  textStyle: {
    color: colors.white,
    fontSize: WP(5),
    alignSelf: 'center',
  },
  textStyle1: {
    color: colors.b1,
    fontSize: WP(4.5),
    alignSelf: 'center',
  },
  itemView: {
    flexDirection: 'row',
    marginVertical: HP(1),
    marginHorizontal: WP(3),
  },
  dotStyle: {
    width: WP(2),
    height: WP(2),
    borderRadius: WP(2),
    alignSelf: 'center',
    marginRight: WP(3),
  },
  dropdownStyle: {
    height: HP(7),
    backgroundColor: colors.white,
    borderRadius: WP(2),
    borderWidth: 0.5,
    borderColor: colors.p1,
    justifyContent: 'center',
  },
  dropDownContainerStyle: {
    backgroundColor: colors.p1,
    borderColor: colors.p1,
    borderWidth: 2,

    borderRadius: WP(2),
    zIndex: 1,
  },

  arrowIconStyle: {
    tintColor: colors.b0,
    height: 25,
    width: 25,
  },
  containerStyle: {
    alignSelf: 'center',
    minHeight: HP(10),
  },
};
