import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const StimmeScreen = () => {

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
    <View>
      <Text style={ styles.pageTitle }>Stimme</Text>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>Stimme Intro</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.1. Zustimmlaut</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Brustton der Überzeugung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.2. Summen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Lockerung der Stimmlippen</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.3. Kausummen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Resonanz</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.4. Schiffshorn</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Tragfähige Stimme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.5. Emotionsvokale</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Stimmumfang</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.6. Italienischer Dialog</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Lebendige Sprechmelodie</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>3.7. Nikolaus</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Kraftstimme</Text>
      </TouchableOpacity>
    </View>
    <View style={ styles.homeImgCont}>
      <Image  style={ styles.imageLekt} source={require('../assets/stim.png')} />
    </View>
    </ScrollView>
  )
}







