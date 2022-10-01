//React components
import React from 'react';
//React Native components
import {View, Text, TouchableOpacity} from 'react-native';
//Styles
import {styles} from './styles';

//
//Component start
//
const CategoryItem = ({item, onSelected}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CategoryItem;
