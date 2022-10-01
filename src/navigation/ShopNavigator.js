//React components
import React from 'react';
//React Navigation components
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Custom screens
import {CategoriesScreen, ProductsListScreen, ProductDetailScreen} from '../screens/index';

const Stack = createNativeStackNavigator();

//
//Component start
//
const ShopNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'ios' ? 'tomato' : 'cyan'
                },
                headerTintColor: Platform.OS === 'ios' ? 'black' : 'white'
            }}>
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title:'Caregorias',
                }}
            />
            <Stack.Screen
                name='ProductsList'
                component={ProductsListScreen}
                options={({route}) => ({
                    headerTitle: route.params.name,
                })}
            />
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen}/>
        </Stack.Navigator>
    );
}

export default ShopNavigator;
