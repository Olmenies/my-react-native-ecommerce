//React components
import React from 'react';
//React Native components
import {View, Text, TouchableOpacity} from 'react-native';
//Expo icons
import { Ionicons } from '@expo/vector-icons';
//Styles

//
//Custom components
//
const CartItem = ({item, onDelete}) => {

    return(
        <View>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.quantity}</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartItem;
