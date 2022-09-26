//React.JS
import React from 'react';
//React Native components
import {View, Text, FlatList} from 'react-native';
//Custom components
//Styles
import {styles} from './styles';

//
//Component start
//
const ProductListScreen = () => {

    const myArray = [
        {id:'1', name:'Janis', surname:'Joplin'},
        {id:'2', name:'Aretha', surname:'Franklin'},
        {id:'3', name:'Andrea', surname:'Motis'}
    ];

    const renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
                <Text>{item.surname}</Text>
            </View>
        );
    };

    return(
        <View>
            <FlatList
                data={myArray}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default ProductListScreen;
