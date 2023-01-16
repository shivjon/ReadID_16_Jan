import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { color } from '../comman/color'
import Headers from '../comman/Headers'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Button from '../comman/Button'

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={color.primary} />
     <Headers  />
     <View style={styles.box}>
        <Text style={styles.heading}>
            Read the NFC chip
        </Text>
        <Text style={styles.para}>
        Place the phone on top the document. Do not move the document and the phone while reading in progress
        </Text>
        <Image 
            source={require("../assets/home.png")}
            style={{width:widthPercentageToDP(70),height:300,marginTop:20, alignSelf:"center",}}
            resizeMode="stretch"
        />
     </View>
     <View style={styles.buttonFooter}>
     <Button  onPress={()=>{props.navigation.navigate("UserDetails")}} />
     </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.white
    },
    buttonFooter:{
        position:"absolute",
        bottom:10,
        width:widthPercentageToDP(90),
        alignSelf:"center",
    },
    para:{
        fontSize:16,
        color:color.black,
        marginTop:20,
    },
    heading:{
        fontSize:18,
        fontWeight:"bold",
        color:color.black
    },
    box:{
        paddingHorizontal:20,
        paddingVertical:10,
    },
})