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

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: 'white' },
      headerShadowVisible: false
    }}  
    >
      <Stack.Screen name="Lektionen" component={LektionenScreen} />
      <Stack.Screen name="Körpersprache" component={KorperspracheScreen} />
      <Stack.Screen name="Atmung" component={AtmungScreen} />
      <Stack.Screen name="Stimme" component={StimmeScreen} />
      <Stack.Screen name="Sprechtechnik" component={SprechtechnikScreen} />
      <Stack.Screen name="Kommunikation" component={KommunikationScreen} />
    </Stack.Navigator>
  );
}