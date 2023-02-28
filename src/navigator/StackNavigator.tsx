import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AspasiaScreen } from '../screens/AspasiaScreen';
import { KontaktScreen} from '../screens/KontaktScreen';
import { LektionenScreen } from '../screens/LektionenScreen';
import { KorperspracheScreen } from '../screens/KorperspracheScreen';
import { AtmungScreen } from '../screens/AtmungScreen';
import { StimmeScreen } from '../screens/StimmeScreen';
import { SprechtechnikScreen } from '../screens/SprechtechnikScreen';
import { KommunikationScreen } from '../screens/KommunikationScreen';

export type RootStackParams = {
  Aspasia: undefined,
  Kontakt: undefined,
  Lektionen: undefined,
  Körpersprache: undefined,
  Atmung: undefined,
  Stimme: undefined,
  Sprechtechnik: undefined,
  Kommunikation: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Aspasia" component={AspasiaScreen} />
      <Stack.Screen name="Kontakt" component={KontaktScreen} />
      <Stack.Screen name="Lektionen" component={LektionenScreen} />
      <Stack.Screen name="Körpersprache" component={KorperspracheScreen} />
      <Stack.Screen name="Atmung" component={AtmungScreen} />
      <Stack.Screen name="Stimme" component={StimmeScreen} />
      <Stack.Screen name="Sprechtechnik" component={SprechtechnikScreen} />
      <Stack.Screen name="Kommunikation" component={KommunikationScreen} />
    </Stack.Navigator>
  );
}