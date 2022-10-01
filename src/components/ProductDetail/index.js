//React components
import React from 'react';
//React Native components
import {View, Text, TouchableOpacity} from 'react-native';

//
//Component start
//
const ProductDetail = ({item, onSelected}) => {

    return(
        <View>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <Text>{item.price}</Text>
                <Text>{item.description}</Text>
                <Text>{item.weight}</Text>
            </View>
        </View>
    );
}

export default ProductDetail;
