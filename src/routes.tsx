import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import Home from './pages/Home';
import FetchAddress from './pages/FetchAddress';
import Calculator from './pages/Calculator';
import Minefield from './pages/Minefield';
import CineNow from './pages/CineNow';
import TodoList from './pages/TodoList';
import Scanner from './pages/Scanner';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#FF4500",
                tabBarInactiveTintColor: "#AAA",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#EFF',
                    height: 60,
                    paddingHorizontal: 16,
                    paddingBottom: 8,
                    borderRadius: 10,
                    elevation: 15
                },
            }}>
            <Tab.Screen 
                name="FetchAddress" 
                component={FetchAddress}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='location-pin' size={size} color={color} />
                    )
                }} 
            />
            
            <Tab.Screen 
                name="Calculator" 
                component={Calculator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='calculator' size={size} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="Minefield" 
                component={Minefield}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='game-controller' size={size} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='home' size={32} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="CineNow" 
                component={CineNow}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="film" size={size} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="TodoList" 
                component={TodoList}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='list' size={size} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="Scanner" 
                component={Scanner}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name='qrcode' size={size} color={color} />
                    )
                }}  
            />
        </Tab.Navigator>
    );
}
