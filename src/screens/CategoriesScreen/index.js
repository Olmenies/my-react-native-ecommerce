//React components
import React from 'react';
//React Native coponents
import {View, Text} from 'react-native';
//Custom components
import {CustomButton} from '../../components/index';
//Styles
import {styles} from './styles';

//
//Component start
//
const CategoriesScreen = ({navigation}) => {
    return(
        <View>
            <Text>Soy CategoriesScreen</Text>
            <CustomButton customButtonText='Go to products' customButtonOnPress={() => navigation.navigate('ProductsList')}/>
        </View>
    );
}

export default CategoriesScreen;
