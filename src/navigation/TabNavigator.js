//React components
import React from 'react';
//React Native components
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Navigators
import CartNavigator from './CartNavigator';
import ShopNavigator from './ShopNavigator';

const BottomTab = createBottomTabNavigator();

//
//Component start
//
const TabNavigator = () => {
    return(
        <BottomTab.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown:false,
            }}>
            <BottomTab.Screen
                name='ShopTab'
                component={ShopNavigator}
            />
            <BottomTab.Screen
                name='CartTab'
                component={CartNavigator}
            />
        </BottomTab.Navigator>
    );
}

export default TabNavigator;
