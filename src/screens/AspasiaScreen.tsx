import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const AspasiaScreen = ( { navigation }:Props) => {

  return (
    <View style={ styles.globalMargin } >
      <Text style={ styles.title}> Aspasia</Text>

        <Button
          title= 'Ir a Lektionen'
          onPress={ () => navigation.navigate('Lektionen')}
        />

        <Text>Navegar con argumentos</Text>

        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity
            style = {styles.botonGrande}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro'
            })}
          >
            <Text style = { styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.botonGrande}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'María'
            })}
          >
            <Text style = { styles.botonGrandeTexto}>María</Text>
          </TouchableOpacity>
        </View>
        {/* <Button 
          title= 'Ir persona'
          onPress={ () => navigation.navigate('PersonaScreen')}
        /> */}
    </View>
  )
}
