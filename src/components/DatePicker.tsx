import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, {useState} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {HP, WP, colors} from '../utilities/exporter';
import {string} from 'yup';

interface Props {
  selectDate: () => void;
  text: string;
  maximumDate: Date;
  minimunDate: Date;
}

const DatePicker: React.FC<Props> = props => {
  const {selectDate, text, maximumDate, minimunDate} = props;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(false);

  const onChange = (event: GestureResponderEvent, selectedDate: any) => {
    const currentDate = selectedDate || date;
    if (event.type == 'set') {
      setDate(currentDate);
      // props.selectDate(moment(currentDate).format('DD/MM/YYYY'));
      setShow(false);
    } else {
      setSelect(false);
      setShow(false);
    }
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setSelect(true);
  };

  const formatDate = (date: any) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <TouchableOpacity
      onPress={showDatepicker}
      style={styles.calanderFieldStyle}>
      <Text style={[styles.calanderText, {color: colors.p1}]}>
        {select ? formatDate(date) : 'Start Date'}
      </Text>

      {/* <CalanderImage marginRight={WP('4%')} /> */}

      {show && (
        <DateTimePicker
          // testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          maximumDate={maximumDate ? props.maximumDate : null}
          minimumDate={minimunDate ? props.minimunDate : null}
        />
      )}
    </TouchableOpacity>
  );
};

DatePicker.defaultProps = {};

export default DatePicker;

const styles = StyleSheet.create({
  calanderFieldStyle: {
    flexDirection: 'row',
    height: HP('7%'),
    marginLeft: WP('7%'),
    marginRight: WP('7%'),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: HP('2%'),
    borderRadius: WP('3%'),
    borderWidth: 1,
    borderColor: colors.b0,
  },

  calanderText: {
    marginLeft: WP('1%'),
    padding: WP('2.6%'),
    alignSelf: 'center',
    fontSize: WP('3.9%'),
  },
  imageStyle: {
    marginRight: WP('2%'),
    width: WP('10%'),
    height: HP('2%'),
    marginTop: HP('1%'),
  },
  imageViewStyle: {
    alignSelf: 'center',
    marginBottom: HP('1%'),
  },
});
