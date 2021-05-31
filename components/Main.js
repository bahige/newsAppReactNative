import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from  'react-native-vector-icons/FontAwesome';
import HeadlineStack from './HeadlineStack/HeadlineStack';
import SourcesStack from './SourcesStack/SourcesStack';
import HistoryStack from './HistoryStack/HistoryStack';

const Main = () => {   
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
            tabBarOptions = {{
                activeTintColor:'white',
                inactiveTintColor:'	#808080',
                labelStyle: {fontSize:14},
                adaptive:true,
                activeBackgroundColor:'#000',
                inactiveBackgroundColor: '#D3D3D3',
                labelPosition: 'below-icon'
            }}>
            <Tab.Screen
                name = "Headlines"
                component = {HeadlineStack}
                options= {({tintColor,focused}) => 
                    <Icon name="newspaper" type='font-awesome' size={22} color={tintColor}/>}>
            </Tab.Screen>
            <Tab.Screen
                name = "Sources"
                component = {SourcesStack}
                options= {({tintColor,focused}) => 
                    <Icon name="rocket" type='font-awesome' size={22} color={tintColor}/>}>
            </Tab.Screen>
            <Tab.Screen
                name = "History"
                component = {HistoryStack}
                options= {({tintColor,focused}) => 
                    <Icon name="history" type='font-awesome' size={22} color={tintColor}/>}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Main
