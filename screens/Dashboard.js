import {StyleSheet, Text, View, Image, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {color} from '../comman/color';
import Headers from '../comman/Headers';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Button from '../comman/Button';

const Dashboard = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.primary} />
      <Headers />
      <ScrollView>

      <View style={styles.box}>
        <Image
          source={require('../assets/card.png')}
          style={{
            width: widthPercentageToDP(70),
            height: 150,
            marginTop: 20,
            alignSelf: 'center',
          }}
          resizeMode="stretch"
        />
        <Text style={styles.tt15}>Seciminizi belirleyin</Text>
      </View>
      <View style={styles.conBox}>
        <View style={styles.innerCard}>
          <Image
            source={require('../assets/idCard.png')}
            style={{
              width: "100%",
              height: 150,
              alignSelf: 'center',
            }}
            resizeMode="stretch"
          />
          <Text style={{fontSize:16, marginVertical:20,color:color.black, textAlign:"center"}}>
          KiMLiK KARTI
          </Text>
        </View>
        <View style={styles.innerCard}>
          <Image
            source={require('../assets/idCard.png')}
            style={{
              width: "100%",
              height: 150,
              alignSelf: 'center',
            }}
            resizeMode="stretch"
          />
          <Text style={{fontSize:16, marginVertical:20,color:color.black,  textAlign:"center"}}>
          PASAPORT
          </Text>
        </View>
        
      </View>
      <Text style={styles.tt14}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </Text>
      </ScrollView>
      {/* <View style={styles.buttonFooter}>
     <Button  onPress={()=>{props.navigation.navigate("UserDetails")}} />
     </View> */}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  tt14:{
    color:color.black,
    paddingHorizontal:20,
    paddingVertical:20,
  },
  innerCard: {
    elevation: 5,
    borderRadius: 20,
    width: '40%',
    marginHorizontal: 10,
    backgroundColor:color.white
  },
  conBox: {
    flexDirection: 'row',
    alignSelf:"center",
    marginTop:20,
  },
  tt15: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
    color: color.primary,
  },
  buttonFooter: {
    position: 'absolute',
    bottom: 10,
    width: widthPercentageToDP(90),
    alignSelf: 'center',
  },
  para: {
    fontSize: 16,
    color: color.black,
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.black,
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
