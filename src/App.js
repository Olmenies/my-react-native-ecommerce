//React Native components
import {Text, View, StatusBar } from 'react-native';
//Custom components
import {Header} from './components/index';
//Custom screeens
import {ProductsListScreen} from './screens/index';
//Custom React Navigation components
import AppNavigator from './navigation/index';

//styles
import {styles} from './styles';

//
//Component start
//
export default function App() {

    return(
        <AppNavigator/>
    )
}
