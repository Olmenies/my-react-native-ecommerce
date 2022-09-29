import React from 'react';
import {Modal, View, Text, Button} from 'react-native'
import {styles} from './styles';

const CustomModal = ({children, isModalVisible, animationType}) => {
    return (
        <Modal animationType={animationType} visible={isModalVisible}>
            {children}
        </Modal>
    );
}

export default CustomModal;
