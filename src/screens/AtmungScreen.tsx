import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AtmungScreen = () => {

  const navigator = useNavigation();

  useEffect(() =>{
    navigator.setOptions({
      title:'',
      headerBackTitle: 'atrás',
      headerTintColor: 'black'
    })
  })
  return (
    <ScrollView>
    <View>
      <Text style={ styles.pageTitle }>Atmung</Text>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>Atmung Intro</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.1. Blumenduft</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Vertiefung der Atmung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.2. Geburtstagskuchen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Dosierung der Atmung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.3. Tauben scheuchen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Zwerchfellkraft</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.4. Bienenflug</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Atemstütze</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.5. Wasserpistole</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Reflektorische Atemergänzung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.6. Raumgestaltung</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Punkte und Pausen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>2.7. Das Blatt</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Abspannen auf Textebene</Text>
      </TouchableOpacity>
    </View>

    <View style={ styles.homeImgCont}>
      <Image  style={ styles.imageLekt} source={require('../assets/atm.png')} />
    </View>
    </ScrollView>

  )
}


