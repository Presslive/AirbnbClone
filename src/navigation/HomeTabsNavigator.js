import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();


const HomeTabsNavigator = (props) => {
  
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#EC7D5E',
        
    }}>
        <Tab.Screen 
        name={"Explore"}
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({color: string}) => (<Fontisto name="search" size={25} color={'color'}
             />
            )
        }}
        />
          <Tab.Screen 
        name={"Saved"}
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({color: string}) => (
            <FontAwesome name="heart-o" size={25} color={'color'} />
            )
        }}
        />
          <Tab.Screen 
        name={"Airbnb"}
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({color: string}) => (<FontAwesome5 name="airbnb" size={25} color={'color'} 
             />
            )
        }}
        />
          <Tab.Screen 
        name={"Messages"}
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({color: string}) => (<Feather name="message-square" size={25} color={'color'} 
             />
            )
        }}
        />
          <Tab.Screen 
        name={"User"}
        component={HomeScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({color: string}) => (<EvilIcons name="user" size={25} color={'color'} 
             />
            )
        }}
        />
    </Tab.Navigator>

  );
};

export default HomeTabsNavigator;
