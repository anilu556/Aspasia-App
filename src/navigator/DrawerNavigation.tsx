import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image} from 'react-native'
import { KontaktScreen } from '../screens/KontaktScreen';
import { EinleitungScreen } from '../screens/EinleitungScreen';
import { BottomTab } from './BottomTab';
import { KorperspracheScreen } from '../screens/KorperspracheScreen';
import { AtmungScreen } from '../screens/AtmungScreen';
import { StimmeScreen } from '../screens/StimmeScreen';
import { SprechtechnikScreen } from '../screens/SprechtechnikScreen';
import { KommunikationScreen } from '../screens/KommunikationScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export function DrawerNavigation(){

    return (
        <Drawer.Navigator
            screenOptions={{ 
                headerStyle :{
                    backgroundColor: '#005395'
                },
                headerTitle: () => <Image source={require('../assets/logo.png')} />,
                headerTintColor: 'white',
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#C50000'
            }}
 
        >
            <Drawer.Screen name="Aspasia" component={BottomTab} /> 
            <Drawer.Screen name="Einleitung" component={EinleitungScreen} />  
            <Drawer.Screen name="Körpersprache" component={KorperspracheScreen} /> 
            <Drawer.Screen name="Atmung" component={AtmungScreen} />   
            <Drawer.Screen name="Stimme" component={StimmeScreen} />   
            <Drawer.Screen name="Sprechtechnik" component={SprechtechnikScreen} />   
            <Drawer.Screen name="Kommunikation" component={KommunikationScreen} />               
            <Drawer.Screen name="Kontakt" component={KontaktScreen} />     
        </Drawer.Navigator>        
    )
}