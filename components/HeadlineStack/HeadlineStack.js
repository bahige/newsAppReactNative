import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack';
import Headlines from './StackComponents/Headlines';
import HeadlineDetails from '../HeadlineDetails';

const HeadlineStack = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Headlines" 
                component={Headlines}
                options= {{
                title: "Today's Picks",     
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color:'#fff',
                    textAlign: 'center',
                    fontSize: 32,
                    height: 50,
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

export default HeadlineStack
