//React Native components
import {Text, View, StatusBar } from 'react-native';
//Custom components
import {Header} from './components/index';
//Custom screeens
import {ProductsListScreen} from './screens/index';

//styles
import {styles} from './styles';

//
//Component start
//
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header headerText='Soy el header'/>
            <ProductsListScreen/>
        </View>
    );
}
