import React from 'react'
import { Button, Text, TouchableOpacity, View, Image, ScrollView  } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const AspasiaScreen = (props:any) => {

  const gotoLektionenScreen = () => {
    props.navigation.navigate('Lektionen');
  };

  const gotoKontaktScreen = () => {
    props.navigation.navigate('Kontakt');
  };

  return (
    <ScrollView>
    <View>
      <Text style={ styles.title}> Aspasia</Text>
      <Text style={ styles.subtitle}>ASPASIA</Text>
      <Text style={ styles.text}>Rhetorikübungen</Text>
      <Text style={ styles.subtitle}>Description</Text>
      <Text style={ styles.text}>ASPASIA</Text>
      <Text style={ styles.text}> 
      Rhetorikübungen - dein tägliches Übungsprogramm für einen souveränen Auftritt.
      In dieser App findest du Übungen zur Körpersprache, Stimme und Sprechtechnik.
      </Text>
      
      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnCont}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnText }>INTRODUCTION VIDEO</Text>
        </View>
      </TouchableOpacity>

      <View style={ styles.homeImgCont}>
        <Image style={ styles.homeImg }  source={require('../assets/home.png')} />
      </View>

  
      <View style={ styles.homeBtnCont }>
        <TouchableOpacity  onPress={ gotoKontaktScreen }>
          <Text style={ styles.homeBtnText }>Kontakt</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={ gotoLektionenScreen }>
          <Text style={ styles.homeBtnText }>Lektionen</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.homeImgCont}>
        <Image style={ styles.homeImgbtm } source={require('../assets/home2.png')} />
      </View>

    </View>
    </ScrollView>
  )
}
