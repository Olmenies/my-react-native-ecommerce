//React components
import React from 'react';
//React Native components
import {View, Text} from 'react-native';
//Custom components
import {CustomButton} from '../../components/index';
//Styles
import {styles} from './styles';

//
//Component start
//
const ProductsListScreen = ({navigation}) => {
    return(
        <View>
            <Text>Soy ProductsListScreen</Text>
            <CustomButton customButtonText='Go to product detail' customButtonOnPress={() => navigation.navigate('ProductDetail')}/>
        </View>
    );
}

export default ProductsListScreen;
