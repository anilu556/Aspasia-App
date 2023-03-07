import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const KommunikationScreen = () => {

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
      <Text style={ styles.pageTitle }>Kommunikation</Text>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>Kommunikation Intro</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.1. Qualitätskommunikation</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Beziehungsaufbau</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.2. Hallo+</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Empathische Kommunikation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.3. Du!</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Dialogische Kommunikation</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.4. Dicke Fische</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Kernaussagen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.5. Bildbeschreibung</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Anschaulichkeit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.6. Emotionale W—Fragen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Interesse zeigen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>5.7. Die Redneruhr</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Kommunikationsvorbereitung</Text>
      </TouchableOpacity>
      <View style={ styles.homeImgCont}>
        <Image  style={ styles.imageLekt} source={require('../assets/komm.png')} />
      </View>
    </View>
    </ScrollView>
  )
}

