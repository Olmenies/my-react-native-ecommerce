//React components
import React from 'react';
//React Navigation components
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Custom screens
import {CategoriesScreen, ProductsListScreen, ProductDetailScreen} from '../screens/index';

const Stack = createNativeStackNavigator();

//
//Component start
//
const ShopNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Categories' component={CategoriesScreen}/>
            <Stack.Screen name='ProductsList' component={ProductsListScreen}/>
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen}/>
        </Stack.Navigator>
    );
}

export default ShopNavigator;
