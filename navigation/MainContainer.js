import * as React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingScreen from './screens/SettingScreen'

// Screen names
const homeName = 'Home';
const detailsName = 'Details';
const settingName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (rn === detailsName){
                            iconName = focused ? 'list' : 'list-outline';
                        }
                        else if (rn === settingName){
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor:'tomato',
                    inactiveTintColor:'grey',
                    labelStyle: {paddingBottom:10, fontSize:10},
                    style: {padding:10, height:70}
                }}
                >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={detailsName} component={DetailsScreen} />
                <Tab.Screen name={settingName} component={SettingScreen} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}