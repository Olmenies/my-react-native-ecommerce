//React.JS
import React from 'react';
//React Native components
import {View, Text} from 'react-native';
//Custom components
//Styles
import {styles} from './styles';

//
//Component start
//
const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>I'm header</Text>
        </View>
    );
}

export default Header;
