import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SprechtechnikScreen = () => {

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
      <Text style={ styles.pageTitle }>Sprechtechnik</Text>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>Sprechtechnik Intro</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.1. Daumensprechen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Kieferöffnung</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.2. Nussknacker I</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Deutliche Lautbildung</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.3. Schnalzen</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Aktive Zungenmotorik</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.4. Fischsprache</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Aktive Lippenmotorik</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.5. Nussknacker II</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Deutliche Artikulation auf Satzebene</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.6. Zaubersprüche</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Ausdrucksstarkes Sprechen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
        <View style={ styles.btnContLek}>
          <Icon name="play-circle" size={30} color="#C50000" /><Text style={ styles.btnTextLek }>4.7. Ausrufe !</Text>
        </View>
        <Text style={ styles.textLek }>Ziel: Kurze klare Sätze</Text>
      </TouchableOpacity>
    </View>
    <View style={ styles.homeImgCont}>
      <Image  style={ styles.imageLekt} source={require('../assets/sprech.png')} />
    </View>
    </ScrollView>
  )
}



