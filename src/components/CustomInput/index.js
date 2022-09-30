//React components
import React from 'react';
//React Native components
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
//Styles
import {styles} from './styles';

const CustomInput = ({item, onChangeText, handleOnAdd}) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Add item'
                value={item}
                onChangeText={onChangeText}
                style={styles.input}
            />
            <TouchableOpacity onPress={() => handleOnAdd()}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomInput;
