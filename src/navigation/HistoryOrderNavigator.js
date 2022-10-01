//React components
import React from 'react';
//React Navigation components
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Custom Screens
import {HistoryOrderScreen} from '../screens/index';


const Stack = createNativeStackNavigator();

//
//Component start
//
const HistoryOrderNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'ios' ? 'tomato' : 'brown'
                },
                headerTintColor: Platform.OS === 'ios' ? 'black' : 'white'
            }}>
            <Stack.Screen name='Orders' component={HistoryOrderScreen}/>
        </Stack.Navigator>
    );
}

export default HistoryOrderNavigator;
