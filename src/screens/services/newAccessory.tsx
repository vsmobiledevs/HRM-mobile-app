import React, {FC, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {
  HP,
  WP,
  colors,
  AccessoryMsgVS,
  accessoryMsgFormFields,
} from '../../utilities/exporter';
import {NavigationProp} from '@react-navigation/native';
import RNDropDown from '../../components/RNDropDown';
import RNInput from '../../components/RNInput';
import RNButton from '../../components/RNButton';
import RNHeader from '../../components/RNHeader';
import {Formik} from 'formik';

interface Props {
  navigation: NavigationProp<any, any>;
}

const NewAccessory: FC<Props> = props => {
  const {navigation} = props;
  const formikRef = useRef();

  const accessoryList = [
    {id: 1, label: 'Mouse', value: 'Mouse'},
    {id: 2, label: 'C-Type Cable', value: 'C-Type Cable'},
    {id: 3, label: 'Android Device', value: 'Android Device'},
    {id: 4, label: 'Ios Device', value: 'Ios Device'},
  ];

  const handleAccessory = values => {};

  return (
    <View style={styles.container}>
      <RNHeader
        text="New Accessory"
        leftOnPress={() => navigation.goBack()}
        image=""
      />
      <ScrollView>
        <View style={styles.miniContainer}>
          <RNDropDown
            onPress={v => console.log(v)}
            title="ACCESSORY TYPE"
            list={accessoryList}
          />
          <Formik
            innerRef={formikRef}
            initialValues={accessoryMsgFormFields}
            onSubmit={(values, {resetForm}) => {
              handleAccessory(values);
            }}
            validationSchema={AccessoryMsgVS}>
            {({values, errors, touched, handleSubmit, handleChange}) => (
              <>
                <View style={styles.messageView}>
                  <Text style={styles.titleStyle}>MESSAGE</Text>
                  <RNInput
                    inputProps={{
                      placeholder: 'Message',
                      placeholderTextColor: colors?.b1,
                      multiline: true,
                      style: styles.inputStyle,
                      value: values.message,
                      onChangeText: handleChange('message'),
                    }}
                    inputStyle={styles.inputView}
                    errorMessage={errors.message}
                    touched={touched.message}
                  />
                </View>

                <RNButton
                  text="Submit"
                  btnProps={{
                    activeOpacity: 0.8,
                    onPress: () => handleSubmit(),
                  }}
                  btnStyle={styles.submitBtn}
                  textStyle={styles.btnTextStyle}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewAccessory;

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
