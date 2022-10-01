//React components
import React from 'react';
//React Native components
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Navigators
import CartNavigator from './CartNavigator';
import ShopNavigator from './ShopNavigator';
//Icons
import { Ionicons } from '@expo/vector-icons';

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
                options={{
                    title:'Shop',
                    tabBarIcon:({focused}) => (
                        <View>
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color="black" />
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    title:'Cart',
                    tabBarIcon:({focused}) => (
                        <View>
                            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={24} color="black" />
                        </View>
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}

export default TabNavigator;
