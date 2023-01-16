import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { color } from './color';

const Heading = ({name}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.tt16}>{name}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
    tt16:{
        fontSize:16,
        color:color.black
    },
  box: {
    width: '100%',
    height:40,
    backgroundColor:color.greyLite,
    justifyContent:"center",
    paddingHorizontal:20,
    marginVertical:10
    },
});
