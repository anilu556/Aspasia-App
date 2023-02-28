import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { EinleitungScreen } from '../screens/EinleitungScreen';
import { AspasiaScreen } from '../screens/AspasiaScreen';
import { AspasiaInfoScreen } from '../screens/AspasiaInfoScreen';
import { KontaktScreen } from '../screens/KontaktScreen';
import { LektionenScreen } from '../screens/LektionenScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={AspasiaScreen} />            
            <Tab.Screen name="Einleitung" component={EinleitungScreen} />
            <Tab.Screen name="Lektionen" component={LektionenScreen} />
            <Tab.Screen name="Info" component={AspasiaInfoScreen} />
            <Tab.Screen name="Kontakt" component={KontaktScreen} />
        </Tab.Navigator>
    );
}