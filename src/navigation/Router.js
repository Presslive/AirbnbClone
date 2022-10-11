import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabsNavigator from './HomeTabsNavigator';

const Stack = createStackNavigator();

const Router= (props) => {
    return(
        <NavigationContainer >
            <Stack.Navigator   >
             <Stack.Screen
                 name={"Home"} 
                component={HomeTabsNavigator}
                options={{
                    headerShown: false,
                
                }}
                />
                <Stack.Screen
                 name={"Destination Search"} 
                component={DestinationSearch}
                options={{
                title: "Search you destination"
            }}
                />
                <Stack.Screen
                 name={"Guests"} 
                component={GuestsScreen}
                options={{
                title: "How many people?"
            }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;