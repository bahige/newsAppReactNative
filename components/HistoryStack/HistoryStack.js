import React from 'react'
import { FlatList, View, Text } from 'react-native'
import HeadlinesHistory from './StackComponents/HeadlinesHistory';
import {createStackNavigator} from '@react-navigation/stack';
import HeadlineDetails from '../HeadlineStack/StackComponents/HeadlineDetails';

const HistoryStack = () => {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator>
            <Stack.Screen name="Articles Visited By You" 
                component={HeadlinesHistory}
                options= {{ 
                headerStyle: {backgroundColor: '#512DA8'},
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color:'#fff'
                }}}/>
            <Stack.Screen name = "Headline Details" 
                component={HeadlineDetails}
                options= {{ 
                headerStyle: {backgroundColor: '#512DA8'},
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color:'#fff'
                }}}/>
        </Stack.Navigator>
    )
}

export default HistoryStack
