//React components
import React from 'react';
//React Navigation components
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Custom Screens
import {CartScreen} from '../screens/index';


const Stack = createNativeStackNavigator();

//
//Component start
//
const CartNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'ios' ? 'tomato' : 'brown'
                },
                headerTintColor: Platform.OS === 'ios' ? 'black' : 'white'
            }}>
            <Stack.Screen name='Cart' component={CartScreen}/>
        </Stack.Navigator>
    );
}

export default CartNavigator;
