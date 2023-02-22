import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';


export const LektionenScreen = () => {

  const navigator = useNavigation<any>();

  useEffect( () => {
    navigator.setOptions({
      title: 'Lektionen',
      headerBackTitle: 'Atrás'
    })
  }, [])

  return (
    <View style={ styles.globalMargin}>
        <Text style={ styles.title}> Lektionen </Text>

        <Button 
          title= 'Ir a Kontakt'
          onPress={() => navigator.navigate('Kontakt')}
        />
    </View>
  )
}
