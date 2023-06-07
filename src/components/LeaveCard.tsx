import React, {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { family, size } from '../utilities/exporter';

interface Props {
    month: string;
  }

const LeaveCard: FC<Props> = (props) => {
    const {month} = props;
  return (
    <View>
      <Text style={styles.monthStyle}>{month}</Text>
    </View>
  )
}

export default LeaveCard

const styles = StyleSheet.create({
    monthStyle: {
        fontSize: size.normal,
    }
})