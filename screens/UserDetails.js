import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { color } from '../comman/color'
import Headers from '../comman/Headers'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Button from '../comman/Button'
import Heading from '../comman/Heading'

const UserDetails = (props) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={color.primary} />
     <Headers  />
     <ScrollView
      showsVerticalScrollIndicator={false}
     >
     <View style={styles.box}>
        <Text style={styles.heading}>
        Passport chip data
        </Text>
        <Heading name="Face Image" />
        <Image
            source={require("../assets/user.png")}
            style={{width:widthPercentageToDP(40),height:200, marginHorizontal:20,}}
            resizeMode="stretch"
        />
        <Heading name="Validity" />
        <View style={{...styles.tView,borderBottomWidth:0}}>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                    Validation Result
                </Text>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                Authentic content and chip
                </Text>
            </View>
        </View>
        <Heading name="Personal information" />
        <View style={styles.tView}>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                    Give Name
                </Text>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                 AROHA Mere Teresa
                </Text>
            </View>
        </View>
        <View style={styles.tView}>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                  Name
                </Text>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                MATA
                </Text>
            </View>
        </View>
        <View style={styles.tView}>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                  Gender
                </Text>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.tt14}>
                Female
                </Text>
            </View>
        </View>
        <View style={{height:100,}} />
     </View>
     </ScrollView>
     <View style={styles.buttonFooter}>
     <Button  onPress={()=>{props.navigation.navigate("Dashboard")}} />
     </View>

    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.white
    },
    innerView:{
        width:"50%",
    },
    tt14:{
        fontSize:14,
        color:color.black
    },
    tView:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingHorizontal:20,
        paddingBottom:15,
        paddingTop:10,
        borderBottomWidth:1,
        borderColor:color.greyLite
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
        color:color.black,
        paddingHorizontal:20,
    },
    box:{
        paddingVertical:10,
    },
})