import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Sources from './StackComponents/Sources';
import HeadlineDetails from '../HeadlineDetails';
import HeadlinesPerSource from './StackComponents/HeadlinesPerSource';

const SourcesStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Sources" 
                component={Sources}
                options= {{
                    title: "Sources",     
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color:'#fff',
                        textAlign: 'center',
                        fontSize: 32,
                        height: 50
                    }}}/>
            <Stack.Screen name="Headlines Per Source" 
                component={HeadlinesPerSource}
                options= {{
                    title: "Sources Headlines",     
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color:'#fff',
                        textAlign: 'center',
                        fontSize: 32,
                        height: 50
                    }}}/>
            <Stack.Screen name="Headline Details" 
                component={HeadlineDetails}
                options= {{
                    title: "" ,
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color:'#fff'
                    }}}/>
        </Stack.Navigator>
    )
}

export default SourcesStack
