//React components
import React from 'react';
import {useState, useEffect} from 'react';
//React Native components
import {View, FlatList} from 'react-native';
//Custom components
import {ProductItem} from '../../components/index';
//Styles
import {styles} from './styles';
//Mock data
import {PRODUCTS} from '../../constants/data/products';


//
//Component start
//
const ProductsListScreen = ({navigation, route}) => {

    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProducts = () => {
        const tempFilteredProducts = PRODUCTS.filter(el => el.category === route.params.categoryID);

        setFilteredProducts(tempFilteredProducts);
    }

    useEffect(() => {
        filterProducts();
    },[]);

    const renderItem = ({item}) => {
        return(
            <ProductItem
                item={item}
                onSelected={() => null}
            />
        );
    }

    const keyExtractor = (item) => item.id.toString();

    return(
        <View>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}

export default ProductsListScreen;
