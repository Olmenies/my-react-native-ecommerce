//React components
import React from 'react';
//React Native coponents
import {View, FlatList} from 'react-native';
//Custom components
import {CategoryItem} from '../../components/index';
//Styles
import {styles} from './styles';
//Mock data
import {CATEGORIES} from '../../constants/data/categories';

//
//Component start
//
const CategoriesScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        console.log(item);
        return(
            <CategoryItem item={item} onSelected={() => navigation.navigate('ProductsList')}/>
        );
    }

    const keyExtractor = (item) => item.id.toString();

    return(
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}

export default CategoriesScreen;
