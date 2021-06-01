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
                inactiveTintColor:'#808080',
                labelStyle: {fontSize:14},
                adaptive:true,
                activeBackgroundColor:'#000',
                inactiveBackgroundColor: '#D3D3D3',
                labelPosition: 'below-icon'
            }}>
            <Tab.Screen
                name = "Headlines"
                component = {HeadlineStack}
                options={{
                    tabBarLabel: 'Headlines',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="book" type='font-awesome' size={22} color={color}/>
                    ),
                  }}>
            </Tab.Screen>
            <Tab.Screen
                name = "Sources"
                component = {SourcesStack}
                options={{
                    tabBarLabel: 'Sources',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="rss" type='font-awesome' size={22} color={color}/>
                    ),
                  }}>
            </Tab.Screen>
            <Tab.Screen
                name = "History"
                component = {HistoryStack}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="history" type='font-awesome' size={22} color={color}/>
                    ),
                  }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Main
