import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const KorperspracheScreen = () => {

  const navigator = useNavigation<any>();

  useEffect( () => {
    navigator.setOptions({
      title: 'Körpersprache'
    })
  }, [])

  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}> Körpersprache </Text>
    </View>
  )
}
