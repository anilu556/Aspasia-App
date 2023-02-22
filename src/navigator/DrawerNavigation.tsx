import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { KontaktScreen } from '../screens/KontaktScreen';
import { EinleitungScreen } from '../screens/EinleitungScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavigation(){

    return (
        <Drawer.Navigator
            screenOptions={{ 
                headerStyle :{
                    backgroundColor: '#005395'
                },
                headerTitle: 'Aspasia',
                headerTintColor: 'white',
                drawerActiveTintColor: 'black',
                drawerActiveBackgroundColor: '#C50000'
            }}
 
        >
            <Drawer.Screen name="StackNavigator" options={{title: 'Aspasia'}} component={StackNavigator} />
            <Drawer.Screen name="Kontakt" options={{title: 'Kontakt'}} component={KontaktScreen} />
            <Drawer.Screen name="Einleitung" options={{title: 'Einleitung'}} component={EinleitungScreen} />            
        </Drawer.Navigator>        
    )
}