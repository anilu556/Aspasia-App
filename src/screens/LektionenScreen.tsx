import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';


export const LektionenScreen = () => {

  const navigator = useNavigation<any>();

  useEffect( () => {
    navigator.setOptions({
      title: 'Lektionen'
    })
  }, [])

  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}> Körpersprache</Text>
      <Button 
        title= 'Übungen'
        onPress={() => navigator.navigate('Körpersprache')}
      />

      <Text style={ styles.title}> Atmung </Text>
      <Button 
        title= 'Übungen'
        onPress={() => navigator.navigate('Atmung')}
      />

      <Text style={ styles.title}> Stimme </Text>
      <Button 
        title= 'Übungen'
        onPress={() => navigator.navigate('Stimme')}
      />

      <Text style={ styles.title}> Sprechtechnik </Text>
      <Button 
        title= 'Übungen'
        onPress={() => navigator.navigate('Sprechtechnik')}
      />

      <Text style={ styles.title}> Kommunikation </Text>
      <Button 
        title= 'Übungen'
        onPress={() => navigator.navigate('Kommunikation')}
      />


    </View>
  )
}
