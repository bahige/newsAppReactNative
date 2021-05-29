import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack';
import Headlines from './StackComponents/Headlines';
import HeadlineDetails from './StackComponents/HeadlineDetails';

const HeadlineStack = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Headlines" component={Headlines}
            options= {{ headerStyle: {backgroundColor: '#512DA8'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                color:'#fff'
            }}}/>
            <Stack.Screen name = "HeadlineDetails" component={HeadlineDetails}
            options= {{ headerStyle: {backgroundColor: '#512DA8'},
            headerTintColor: "#fff",
            headerTitleStyle: {
                color:'#fff'
            }}}/>
        </Stack.Navigator>
    )
}

export default HeadlineStack
