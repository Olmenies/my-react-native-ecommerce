//React components
import React from 'react';
//React Native components
import {View, Text, TouchableOpacity} from 'react-native';
//Styles
import {styles} from './styles';

const ProductItem = ({item, onSelected}) => {

    return(
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => onSelected(item)}>
                <View>
                    <Text>{item.name}</Text>
                </View>
                <View>
                    <Text>{item.price}</Text>
                    <Text>{item.weight}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ProductItem;
