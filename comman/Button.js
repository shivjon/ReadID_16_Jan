import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from './color'

const Button = ({name='NEXT', onPress}) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress}>
        <Text style={styles.tt16}>
            {name}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    tt16:{
        fontSize:16,
        color:color.white,
    },
    conatiner:{
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:color.primary,
        borderRadius:20,
    }
})