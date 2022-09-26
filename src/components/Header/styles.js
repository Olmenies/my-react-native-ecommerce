//React Native components
import {StyleSheet} from 'react-native';
//Colors constants
import COLORS from '../../constants/colors'

//
//Component start
//
export const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center',
        height:80,
    },
    headerText:{
        color:'white',
    }
});
