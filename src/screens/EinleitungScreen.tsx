import React from 'react'
import { Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';

export const EinleitungScreen = () => {
  return (
    <View>
      <Text style={ styles.pageTitle }>Einleitung Screen</Text>

      <Text style={ styles.pageText }>
      Über diese App: Aspasia von Milet war eine berühmte Rednerin und mit ihrem „philosophischen Salon“ Gründerin der ersten schriftlich erwähnten Redeschule. 
      Zu ihren Schülern gehörten Sokrates, Euripides, Perikles, Platon und viele andere. 
      Sie kann daher als „Mutter der Rhetorik“ bezeichnet werden. Aspasia begeisterte durch ein charismatisches Auftreten und herausragende Redekunst. 
      Lasst uns gemeinsam in ihre Fußstapfen treten....
      </Text>

      <View style={ styles.einImgCont}>
        <Image style={ styles.homeImgbtm } source={require('../assets/home2.png')} />
      </View>

    </View>
  )
}
