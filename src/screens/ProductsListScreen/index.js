//React.JS
import React from 'react';
import {useState, useEffect} from 'react';
//React Native components
import {View, Text, FlatList, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
//Custom components
import {CustomModal} from '../../components/index';
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

    useEffect(() => {
        console.log(myArray);
    },[myArray]);

    const renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.title}</Text>

                <TouchableOpacity style={{backgroundColor:'#03bb85', padding:3, borderRadius:7}} onPress={() => null}>
                    <Text>Comprar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'red', padding:3, borderRadius:7}} onPress={() => handleOnDelete(item)}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return(
        <View>

            <View>
                <TextInput
                    placeholder='Add item'
                    value={item}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity onPress={() => handleOnAdd()}><Text>Add</Text></TouchableOpacity>
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
