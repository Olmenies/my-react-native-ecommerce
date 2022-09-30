//React components
import React from 'react';
//React Native components
import {View, Text, TouchableOpacity} from 'react-native';
//Custom components
import {CustomButton} from '../index';
//Styles
import {styles} from './styles';

const Item = ({item, handleOnDelete}) => {

    return(
        <View style={styles.itemContainer}>
            <Text>{item.title}</Text>

            <CustomButton customButtonText='Comprar'/>
            <CustomButton customButtonText='X' style={{backgroundColor:'red'}} customButtonOnPress={() => handleOnDelete(item)}/>
        </View>
    );
}

export default Item;
