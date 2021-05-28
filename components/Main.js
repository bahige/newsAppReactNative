import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from  'react-native-vector-icons/FontAwesome';
import Headlines from './Headlines';
import Sources from './Sources';
import History from './History';

const Main = () => {   
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
            tabBarOptions = {{
                activeTintColor:'white',
                inactiveTintColor:'gray',
                labelStyle: {fontSize:14},
                adaptive:true,
                activeBackgroundColor:'#9575CD',
                inactiveBackgroundColor: '#D1C4E9'
            }}>
            <Tab.Screen
                name = "Headlines"
                component = {Headlines}
                options= {({tintColor,focused}) => 
                    <Icon name="newspaper" type='font-awesome' size={22} color={tintColor}/>}>
            </Tab.Screen>
            <Tab.Screen
                name = "Sources"
                component = {Sources}
                options= {({tintColor,focused}) => 
                    <Icon name="rocket" type='font-awesome' size={22} color={tintColor}/>}>
            </Tab.Screen>
            <Tab.Screen
                name = "History"
                component = {History}
                options= {({tintColor,focused}) => 
                    <Icon name="history" type='font-awesome' size={22} color={tintColor}/>}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Main
