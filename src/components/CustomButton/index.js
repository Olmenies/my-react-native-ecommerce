//React components
import React from 'react';
//React Native components
import {View, Text, TouchableOpacity} from 'react-native';
//Styles
import {styles} from './styles';

const CustomButton = ({customButtonText, customButtonOnPress, style}) => {
    console.log(style);
    console.log(styles.container);

    return(
        <TouchableOpacity style={{...styles.container, ...style}} onPress={customButtonOnPress}>
            <Text>{customButtonText}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
