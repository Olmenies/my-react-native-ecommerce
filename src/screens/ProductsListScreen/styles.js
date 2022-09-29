//React Native components
import {StyleSheet} from 'react-native';
//Colors constants
import COLORS from '../../constants/colors'

//
//Component start
//
export const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:COLORS.secondary,
        margin:10,
        padding:10,
        elevation:3,
        borderRadius:7,
    }
});
