import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from './color'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

const Headers = ({}) => {
  return (
    <View style={styles.conatiner}>
        <Text style={styles.tt18}>
           <Text style={styles.color}>READ</Text> <Text style={{color:color.secondary,fontWeight:"normal"}}>ID</Text> 
        </Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({
    tt18:{
        fontSize:40,
        fontWeight:"bold",
        color:color.black,
    },
    color:{
        color:color.primary,
        letterSpacing:10,
    },
    conatiner:{
        backgroundColor:color.white,
        height:50,
        elevation:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    
})