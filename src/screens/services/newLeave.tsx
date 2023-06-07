import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {HP, WP, colors} from '../../utilities/exporter';
import RNHeader from '../../components/RNHeader';
import {NavigationProp} from '@react-navigation/native';
import DatePicker from '../../components/DatePicker';
import RNDropDown from '../../components/RNDropDown';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';

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
      <ScrollView>
        <View style={styles.miniContainer}>
          <DatePicker
            text="Start Date"
            selectDate={d => console.log(d)}
            title="START DATE"
          />
          <DatePicker
            text="End Date"
            selectDate={d => console.log(d)}
            title="END DATE"
          />
          <RNDropDown onPress={v => console.log(v)} title="LEAVE TYPE" />
          <View style={styles.messageView}>
            <Text style={styles.titleStyle}>MESSAGE</Text>
            <RNInput
              inputProps={{
                placeholder: 'Message',
                placeholderTextColor: colors?.b1,
                multiline: true,
                style: styles.inputStyle,
              }}
              inputStyle={styles.inputView}
            />
          </View>

          <RNButton
            text="Submit"
            btnProps={{
              activeOpacity: 0.8,
            }}
            btnStyle={styles.submitBtn}
            textStyle={styles.btnTextStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

NewLeave.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  miniContainer: {
    marginHorizontal: WP(5),
    marginTop: HP(3),
  },
  messageView: {
    marginVertical: HP(2),
    zIndex: -1,
  },
  inputView: {
    height: HP(15),
  },
  inputStyle: {
    textAlignVertical: 'top',
    color: colors.p1,

    width: WP(85),
  },
  titleStyle: {
    fontSize: WP(4),
    fontWeight: '600',
    color: colors.p1,
    marginVertical: HP(1),
  },
  submitBtn: {
    backgroundColor: colors.p1,
    marginTop: HP(5),
    borderRadius: WP(2),
    height: HP(6),
  },
  btnTextStyle: {
    fontWeight: '700',
    fontSize: WP(5),
    lineHeight: HP(5),
    color: colors.white,
  },
});

export default NewLeave;
