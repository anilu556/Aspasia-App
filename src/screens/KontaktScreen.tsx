import React from 'react'
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { styles } from '../theme/appTheme';

export const KontaktScreen = () => {
  return (
    <ScrollView>
    <View>
      <Text style={ styles.pageTitle }>Kontakt</Text>

      <Text style={ styles.konPageText }>
      Hallo
      </Text>
      <Text style={ styles.konPageTextBold }>
      ICH BIN ARIANE
      </Text>
      <Text style={ styles.konPageText }>
      Rhetorik und Kommunikatiionstrainerin
      Ich bereite Menschen auf Auftritte, Präsentationen und wichtige Gespräche vor.
      In dieser App hast du einen Einblick in meine Arbeit bekommen.
      </Text>
      <Text style={ styles.konPageTextBold }>
      BLEIBEN WIR IN KONTAKT?
      </Text>
      <Text style={ styles.konPageText}>
      Möchtest du mehr Übungen und Tipps rund um die Kommunikation, dann besuche mich geren auf meinem YouTube-Kanal
      </Text>
      <Text style={ styles.konPageText}>
      YOUTUBE :
      </Text>
      <Text style={ styles.konPageUrl}
      onPress={() => Linking.openURL('https://www.youtube.com/@DieRhetorikerin')}>
      https://www.youtube.com/@DieRhetorikerin
      </Text>
      <Text style={ styles.konPageText}>
      FON Rhetorik - Wir, das Rhetorik-Team des FON Instituts, bereiten seit über 30 Jahren Menschen auf Reden, Präsentationen und wichtige Gespräche vor. 
      Die Übungen dieser App sind Teil unseres Rhetorikprogramms. Viel Spaß bei Üben !
      </Text>

      <View style={ styles.konImgCont}>
        <Image style={ styles.konImgbtm } source={require('../assets/kontakt.png')} />
      </View>
    </View>
    </ScrollView>
  )
}
