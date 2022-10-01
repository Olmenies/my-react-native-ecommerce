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
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onSelected(item)}>
            <View>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CategoryItem;
