import React, { useEffect } from 'react'
import { Button, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


interface Props extends StackScreenProps<any, any>{};

export const LektionenScreen = ( { navigation }:Props) => {
 
  const navigator = useNavigation();

  useEffect( () => {
    navigator.setOptions({
      title:'',
      headerBackTitle: 'atrás',
      headerTintColor: 'black'
    })
  })
    
  return (

      <ScrollView>
        <View style={ styles.homeImgCont}>
          <Text style={ styles.titleLekt}> Körpersprache</Text>
          <Image  style={ styles.imageLekt} source={require('../assets/kor.png')} />
          <TouchableOpacity 
          onPress={() => navigation.navigate('Körpersprache')}
          style={ styles.titleLekt}> 
          <Text style={styles.btnLekt}>Übungen</Text>  
          </TouchableOpacity>
        </View>
   
        <View style={ styles.homeImgCont}>
          <Text style={ styles.titleLekt}> Atmung </Text>
          <Image  style={ styles.imageLekt} source={require('../assets/atm.png')} />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Atmung')}
            style={styles.titleLekt}>
            <Text style={styles.btnLekt}> Übungen </Text> 
          </TouchableOpacity>
        </View>

        <View style={ styles.homeImgCont}>
          <Text style={ styles.titleLekt}> Stimme </Text>
          <Image  style={ styles.imageLekt} source={require('../assets/stim.png')} />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Stimme')}
            style={styles.titleLekt}>
            <Text style={styles.btnLekt}> Übungen </Text>  
            </TouchableOpacity>
        </View>

        <View style={ styles.homeImgCont}>
          <Text style={ styles.titleLekt}> Sprechtechnik </Text>
          <Image  style={ styles.imageLekt} source={require('../assets/sprech.png')} />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Sprechtechnik')}
            style={styles.titleLekt}>
            <Text style={styles.btnLekt}> Übungen </Text> 
            </TouchableOpacity>
        </View>

        <View style={ styles.homeImgCont}>
        <Text style={ styles.titleLekt}> Kommunikation </Text>
        <Image  style={ styles.imageLekt} source={require('../assets/komm.png')} />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Kommunikation')}
          style={styles.titleLekt}>
          <Text style={styles.btnLekt}> Übungen </Text> 
          </TouchableOpacity>
        </View>
    </ScrollView>

  )
}
