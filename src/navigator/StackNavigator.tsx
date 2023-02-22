import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AspasiaScreen } from '../screens/AspasiaScreen';
import { KontaktScreen} from '../screens/KontaktScreen';
import { LektionenScreen } from '../screens/LektionenScreen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
  Aspasia: undefined,
  Kontakt: undefined,
  Lektionen: undefined,
  PersonaScreen: {id: number, nombre: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Aspasia" component={AspasiaScreen} />
      <Stack.Screen name="Kontakt" component={KontaktScreen} />
      <Stack.Screen name="Lektionen" component={LektionenScreen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}