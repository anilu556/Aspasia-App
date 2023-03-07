import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import { EinleitungScreen } from '../screens/EinleitungScreen';
import { AspasiaScreen } from '../screens/AspasiaScreen';
import { AspasiaInfoScreen } from '../screens/AspasiaInfoScreen';
import { KontaktScreen } from '../screens/KontaktScreen';
import { LektionenScreen } from '../screens/LektionenScreen';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const BottomTab = () =>{
    return(
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions= {({route}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    
                    let iconName: string = '';
   
                    switch(route.name){
                        case 'Home':
                            iconName = 'home-outline'
                        break;
                        case 'Einleitung':
                            iconName = 'book-outline'
                        break;
                        case 'Lektionen':
                            iconName = 'document-outline'
                        break;
                        case 'Info':
                            iconName = 'information-circle-outline'
                        break;
                        case 'Kontakt':
                            iconName = 'mail-outline'
                        break;

                    }
                    return <Icon name={iconName} size={30} color="#C50000" />
                },
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: '#000',
                tabBarStyle: {
                    borderTopColor: 'black',
                    borderTopWidth: 2,
                    elevation: 0,
                },
            })}   
        >
            <Tab.Screen name="Home" options={{title: 'Home'}} component={AspasiaScreen} />            
            <Tab.Screen name="Einleitung" options={{title: 'Einleitung'}}  component={EinleitungScreen} />
            <Tab.Screen name="Lektionen" options={{title: 'Lektionen'}}  component={StackNavigator} />
            <Tab.Screen name="Info" options={{title: 'Info'}}  component={AspasiaInfoScreen} />
            <Tab.Screen name="Kontakt" options={{title: 'Kontakt'}} component={KontaktScreen} />
        </Tab.Navigator>
    );
}