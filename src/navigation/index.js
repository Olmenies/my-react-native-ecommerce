//React components
import React from 'react';
//React Navigation components
import {NavigationContainer} from "@react-navigation/native";
//Custom React Navigation components
import ShopNavigator from './ShopNavigator';

//
//Component start
//
const AppNavigator = () => {

    return(
        <NavigationContainer>
            <ShopNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigator;
