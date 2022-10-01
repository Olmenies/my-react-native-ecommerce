//React components
import React from 'react';
//React Native components
import {View, Text} from 'react-native';
//Custom components
import {ProductDetail} from '../../components/index';
//Styles
import {styles} from './styles';

//
//Component start
//
const ProductDetailScreen = ({navigation, route}) => {
    return(
        <View>
            <ProductDetail
                item={route.params.product}
                onSelected={() => null}
            />
        </View>
    );
}

export default ProductDetailScreen;
