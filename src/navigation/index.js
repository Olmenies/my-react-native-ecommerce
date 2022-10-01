//React components
import React from 'react';
//React Navigation components
import {NavigationContainer} from "@react-navigation/native";
//Custom React Navigation components
import TabNavigator from './TabNavigator';

//
//Component start
//
const AppNavigator = () => {

    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigator;
