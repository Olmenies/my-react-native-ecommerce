//React components
import React from 'react';
import {useState, useEffect} from 'react';
//React Native components
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
//Custom components
import {CartItem} from '../../components/index';
//Cart mock data
import {CART} from '../../constants/data/cart';

//
//Component start
//
const CartScreen = () => {

    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        let tempTotalPrice = 0;

        CART.forEach((item, i) => {
            tempTotalPrice += (item.price * item.quantity);
        });
        setTotalPrice(tempTotalPrice);
    }

    const onHandleDelete = (id) => {
        console.warn(id);
    }

    const onHandleConfirm = () => {
        console.log('Confirmed');
    }

    const renderItem = ({item}) => {
        return(
            <CartItem
                item={item}
                onDelete={onHandleDelete}
            />
        );
    }

    const keyExtractor = (item) => item.id.toString();

    useEffect(() => {
        setTotalPrice(calculateTotalPrice);
    },[totalPrice]);

    return(
        <View>
            <View>
                <FlatList
                    data={CART}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
            <View>
                <Text>{totalPrice}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => onHandleConfirm()}>
                    <Text>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartScreen;
