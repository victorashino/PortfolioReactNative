import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons'
import Home from './pages/Home';
import FetchAddress from './pages/FetchAddress';
import Calculator from './pages/Calculator';
import Minefield from './pages/Minefield';
import DogsInfo from './pages/DogsInfo';
import TodoList from './pages/TodoList';
import QRCodeScanner from './pages/QRCodeScanner';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
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
                    <Entypo name='home' size={size} color={color} />
                )
            }} />
            
            <Tab.Screen 
            name="Calculator" 
            component={Calculator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }}  />

            <Tab.Screen 
            name="Minefield" 
            component={Minefield}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }}  />

            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={32} color={color} />
                )
            }}  />

            <Tab.Screen 
            name="DogsInfo" 
            component={DogsInfo}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }}  />

            <Tab.Screen 
            name="TodoList" 
            component={TodoList}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }}  />

            <Tab.Screen 
            name="QRCodeScanner" 
            component={QRCodeScanner}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }}  />
        </Tab.Navigator>
    );
}
