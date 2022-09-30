//React.JS
import React from 'react';
import {useState, useEffect} from 'react';
//React Native components
import {View, Text, FlatList, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
//Custom components
import {CustomModal, Item, CustomInput} from '../../components/index';
//Styles
import {styles} from './styles';

//
//Component start
//
const ProductListScreen = () => {

    const [myArray, setMyArray] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [item, setItem] = useState('');

    const deleteItem = (id) => {
        const tempArray = myArray.filter(i => i.id !== id);
        setMyArray(tempArray);
        setIsModalVisible(false);
    }

    const handleOnDelete = (item) => {
        setIsModalVisible(true);
        setSelectedItem(item);
    }

    const onChangeText = (value) => {
        setItem(value);
    }

    const handleOnAdd = () => {
        const tempObject = {
            id:0,
            title:''
        };

        tempObject.id = myArray.length + 1;
        tempObject.title = item;

        setMyArray([...myArray, tempObject]);

        setItem('');
    }

    const renderItem = ({item}) => {
        return (
            <Item item={item} handleOnDelete={handleOnDelete}/>
        );
    };

    return(
        <View>
            <View>
                <CustomInput item={item} onChangeText={onChangeText} handleOnAdd={handleOnAdd}/>
            </View>
            <View>
                <FlatList
                    data={myArray}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <CustomModal selectedItem={selectedItem} isModalVisible={isModalVisible} animationType='slide'>
                <View>
                    <View>
                        <Text>Detalle de la lista:{selectedItem.name}</Text>
                    </View>
                    <View style={styles.modalTextView}>
                        <Text style={styles.modalText}>¿Estás seguro de que querés eliminar el componente?</Text>
                    </View>
                    <View style={styles.modalButtonView}>
                        <Button title='Eliminar' onPress={() => deleteItem(selectedItem.id)}/>
                        <Button title='Cancelar' onPress={() => setIsModalVisible(false)}/>
                    </View>
                </View>
            </CustomModal>
        </View>
    );
}

export default ProductListScreen;
