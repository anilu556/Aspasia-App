import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any>{};

export const KorperspracheScreen = ( { navigation }:Props) => {
 
    const navigator = useNavigation();
  
    useEffect( () => {
      navigator.setOptions({
        title:'',
        headerBackTitle: 'atrás',
        headerTintColor: 'black',
      })
    })

  return (
    <ScrollView>
    <View>
      <Text style={ styles.pageTitle }>Körpersprache</Text>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>Körpersprache Intro</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>1.1. Freeze</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Wahrnehmung und Wirkung der Haltung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>1.2. Baum</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Stabiler Stand</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>1.3. Zirkusdirektor:in</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Souverän stehen vor Gruppen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>1.4. Lampe</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Präsenz und Charisma</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>1.5. Dirigent:in</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Lebendige Gestik</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>1.6. Magier:in</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Intensiver Blickkontakt und Publikumsbezug.</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLekLek }>1.7. Geschenke</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Lebendige Mimik</Text>
      </TouchableOpacity>
      <View style={ styles.homeImgCont}>
      <Image  style={ styles.imageLekt} source={require('../assets/kor.png')} />
      </View>
    </View>
    </ScrollView>
  )
}

