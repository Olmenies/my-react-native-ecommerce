//React components
import React from 'react';
//React Native coponents
import {View, FlatList} from 'react-native';
//Custom components
import {HistoryOrderItem} from '../../components/index';
//Styles
import {styles} from './styles';
//Mock data
import {HISTORYORDERS} from '../../constants/data/historyOrders';

//
//Component start
//
const HistoryOrderScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return(
            <HistoryOrderItem item={item}/>
        );
    }

    const keyExtractor = (item) => item.id.toString();

    return(
        <View>
            <FlatList
                data={HISTORYORDERS}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}

export default HistoryOrderScreen;
