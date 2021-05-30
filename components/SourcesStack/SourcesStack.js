import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Sources from './StackComponents/Sources';
import HeadlineDetails from '../HeadlineStack/StackComponents/HeadlineDetails';
import HeadlinesPerSource from './StackComponents/HeadlinesPerSource';

const SourcesStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sources" component={Sources}
            options= {{ headerStyle: {backgroundColor: '#512DA8'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                color:'#fff'
            }}}/>
            <Stack.Screen name="Headlines Per Source" component={HeadlinesPerSource}
            options= {{ headerStyle: {backgroundColor: '#512DA8'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                color:'#fff'
            }}}/>
            <Stack.Screen name="Headline Details" component={HeadlineDetails}
            options= {{ headerStyle: {backgroundColor: '#512DA8'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                color:'#fff'
            }}}/>
        </Stack.Navigator>
 
    )
}

export default SourcesStack
