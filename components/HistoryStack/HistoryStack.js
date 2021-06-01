import React from 'react'
import HeadlinesHistory from './StackComponents/HeadlinesHistory';
import {createStackNavigator} from '@react-navigation/stack';
import HeadlineDetails from '../HeadlineDetails';


const HistoryStack = () => {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator>
            <Stack.Screen name="Articles Visited By You" 
                component={HeadlinesHistory}
                options= {{
                    title: "Visited Headlines",     
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
            <Stack.Screen name = "Headline Details" 
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

export default HistoryStack
