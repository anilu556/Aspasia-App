import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const AspasiaScreen = ( { navigation }:Props) => {

  return (
    <View style={ styles.globalMargin } >
      <Text style={ styles.title}> Aspasia</Text>
      <Text>ASPASIA</Text>
      <Text>Rhetorikübungen</Text>
      <Text>Description</Text>
      <Text>ASPASIA</Text>
      <Text> 
      Rhetorikübungen - dein tägliches Übungsprogramm für einen souveränen Auftritt.
      In dieser App findest du Übungen zur Körpersprache, Stimme und Sprechtechnik.
      </Text>
      
      <Button
        title= 'Kontakt'
        onPress={ () => navigation.navigate('Kontakt')}
      />

      <Button
        title= 'Lektionen'
        onPress={ () => navigation.navigate('Lektionen')}
      />

    </View>
  )
}
